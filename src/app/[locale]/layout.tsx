import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { COMPANY } from "@/config/company";

const SITE_URL = `https://${COMPANY.domain}`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const path = locale === routing.defaultLocale ? "/" : `/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        en: `${SITE_URL}/`,
        es: `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Rentatoptech",
      url: `${SITE_URL}${path}`,
      title: t("title"),
      description: t("description"),
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const prefill =
    locale === "es" ? "Hola, tengo una consulta sobre Rentatoptech:" : "Hi, I have a question about Rentatoptech:";

  return (
    <NextIntlClientProvider>
      <SetHtmlLang locale={locale} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppWidget prefillText={prefill} />
    </NextIntlClientProvider>
  );
}
