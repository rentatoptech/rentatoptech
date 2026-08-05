import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/Logo";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Rentatoptech">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6">
          {/* Plain #hash anchors only work while already on the home page —
              from /legal-notice or /privacy-policy they just rewrite the
              URL hash with nothing to scroll to. Routing through "/" first
              (next-intl's Link, so it stays on the current locale) fixes
              that and still scrolls smoothly when already home. */}
          <Link
            href={{ pathname: "/", hash: "projects" }}
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            {t("projects")}
          </Link>
          <Link
            href={{ pathname: "/", hash: "about" }}
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            {t("about")}
          </Link>
          <Link
            href={{ pathname: "/", hash: "contact" }}
            className="text-sm font-medium text-foreground hover:text-primary"
          >
            {t("contact")}
          </Link>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
