import { useLocale, useTranslations } from "next-intl";
import { PROJECTS } from "@/config/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { COMPANY } from "@/config/company";

export default function HomePage() {
  const locale = useLocale();
  const tHero = useTranslations("hero");
  const tAbout = useTranslations("about");
  const tProjects = useTranslations("projects");
  const tContact = useTranslations("contact");

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 text-center sm:pt-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
          {tHero("eyebrow")}
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {tHero("title")}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {tHero("subtitle")}
        </p>
        <a
          href="#projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          {tHero("cta")}
        </a>
      </section>

      <section id="projects" className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {tProjects("title")}
            </h2>
            <p className="mt-2 text-sm text-muted">{tProjects("subtitle")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                links={project.examples.map((example) => ({
                  name:
                    example.linkText?.[locale as "en" | "es"] ??
                    (project.examples.length > 1 ? example.name : tProjects("visit")),
                  url: locale === "es" ? example.url.es : example.url.en,
                }))}
                category={tProjects(`category.${project.categoryKey}`)}
                tagline={tProjects(`items.${project.taglineKey}`)}
                marketLabel={tProjects(`market.${project.market}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {tAbout("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{tAbout("body")}</p>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {tContact("title")}
          </h2>
          <p className="mt-2 text-sm text-muted">{tContact("subtitle")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
            >
              {tContact("email")}: {COMPANY.email}
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:brightness-95"
            >
              {tContact("whatsapp")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
