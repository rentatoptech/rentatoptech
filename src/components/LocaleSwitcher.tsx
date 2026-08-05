"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = { en: "EN", es: "ES" };

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-xs font-semibold">
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          disabled={l === locale}
          onClick={() => router.replace(pathname, { locale: l })}
          className={`rounded-full px-2 py-1 transition-opacity ${
            l === locale ? "opacity-100 underline" : "opacity-50 hover:opacity-80"
          }`}
        >
          {labels[l] ?? l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
