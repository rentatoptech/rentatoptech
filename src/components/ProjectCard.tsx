import { MarketBadge } from "@/components/MarketBadge";
import type { Project } from "@/config/projects";

export function ProjectCard({
  project,
  links,
  category,
  tagline,
  marketLabel,
}: {
  project: Project;
  links: { name: string; url: string }[];
  category: string;
  tagline: string;
  marketLabel: string;
}) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          <MarketBadge market={project.market} label={marketLabel} />
        </div>
        <p className="mb-4 text-xs font-medium uppercase tracking-wide text-primary">
          {category}
        </p>
        <p className="text-sm leading-relaxed text-muted">{tagline}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
          >
            {link.name}
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </article>
  );
}
