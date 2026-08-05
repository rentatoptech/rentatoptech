import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { COMPANY, fullAddress, LEGAL_LAST_UPDATED } from "@/config/company";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalNotice" });
  return { title: t("title") };
}

const SECTION_KEYS = ["identification", "purpose", "ip", "liability", "law"] as const;

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalNotice" });

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">{t("title")}</h1>
      <p className="mt-2 text-sm text-muted">
        {t("lastUpdated")}: {LEGAL_LAST_UPDATED}
      </p>

      <div className="mt-8 space-y-8">
        {SECTION_KEYS.map((key) => (
          <section key={key}>
            <h2 className="text-lg font-semibold text-foreground">
              {t(`sections.${key}.title`)}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t(`sections.${key}.body`)}
            </p>
            {key === "identification" && (
              <ul className="mt-3 space-y-1 text-sm text-muted">
                <li>
                  <strong className="text-foreground">
                    {locale === "es" ? "Denominación social" : "Legal name"}:
                  </strong>{" "}
                  {COMPANY.legalName}
                </li>
                <li>
                  <strong className="text-foreground">
                    {locale === "es" ? "CIF" : "Tax ID"}:
                  </strong>{" "}
                  {COMPANY.taxId}
                </li>
                <li>
                  <strong className="text-foreground">
                    {locale === "es" ? "Domicilio" : "Address"}:
                  </strong>{" "}
                  {fullAddress()}
                </li>
                <li>
                  <strong className="text-foreground">
                    {locale === "es" ? "Registro" : "Registry"}:
                  </strong>{" "}
                  {COMPANY.registry.office}, {COMPANY.registry.entry}
                </li>
                <li>
                  <strong className="text-foreground">Email:</strong> {COMPANY.email}
                </li>
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
