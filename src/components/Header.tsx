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
          <a href="#projects" className="text-sm font-medium text-foreground hover:text-primary">
            {t("projects")}
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary">
            {t("about")}
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary">
            {t("contact")}
          </a>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
