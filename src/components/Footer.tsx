import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { COMPANY } from "@/config/company";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-xs leading-relaxed text-muted">
            {COMPANY.legalName} · {COMPANY.taxId}
          </p>
          <SocialLinks className="mt-4" />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/legal-notice" className="text-muted hover:text-foreground">
            {t("legalNotice")}
          </Link>
          <Link href="/privacy-policy" className="text-muted hover:text-foreground">
            {t("privacyPolicy")}
          </Link>
        </div>
      </div>
      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted">
        © {year} {COMPANY.legalName}. {t("rights")}
      </div>
    </footer>
  );
}
