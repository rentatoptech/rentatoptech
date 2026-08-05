// One-off: renders public/logos/mark.svg to PNG at a few sizes via sharp,
// then hand-builds a minimal multi-image .ico (ICO can embed PNG data
// directly since Windows Vista, no external ico encoder needed).
import sharp from "sharp";
import { writeFileSync, readFileSync } from "node:fs";
import path from "node:path";

const SIZES = [16, 32, 48];
const svgPath = path.join(process.cwd(), "src/app/icon.svg");
const outPath = path.join(process.cwd(), "src/app/favicon.ico");

const pngs = await Promise.all(
  SIZES.map((size) => sharp(readFileSync(svgPath)).resize(size, size).png().toBuffer())
);

const headerSize = 6;
const entrySize = 16;
const dataOffset0 = headerSize + entrySize * SIZES.length;

const header = Buffer.alloc(headerSize);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(SIZES.length, 4); // image count

let offset = dataOffset0;
const entries = [];
for (let i = 0; i < SIZES.length; i++) {
  const size = SIZES[i];
  const png = pngs[i];
  const entry = Buffer.alloc(entrySize);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // color count
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bit count
  entry.writeUInt32LE(png.length, 8); // bytes in resource
  entry.writeUInt32LE(offset, 12); // image offset
  entries.push(entry);
  offset += png.length;
}

const ico = Buffer.concat([header, ...entries, ...pngs]);
writeFileSync(outPath, ico);
console.log(`Wrote ${outPath} (${ico.length} bytes, sizes: ${SIZES.join(", ")})`);
