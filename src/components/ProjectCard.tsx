import { MarketBadge } from "@/components/MarketBadge";
import type { Project } from "@/config/projects";

export function ProjectCard({
  project,
  url,
  category,
  tagline,
  marketLabel,
  visitLabel,
}: {
  project: Project;
  url: string;
  category: string;
  tagline: string;
  marketLabel: string;
  visitLabel: string;
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
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
      >
        {visitLabel}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
