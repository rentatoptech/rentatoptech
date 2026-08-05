import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/config/company";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });
  return { title: t("title") };
}

const SECTION_KEYS = ["controller", "data", "purpose", "retention", "rights"] as const;

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });

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
              {key === "rights" && <> {COMPANY.email}.</>}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
