import { MarketBadge } from "@/components/MarketBadge";
import { PlatformBadge } from "@/components/PlatformBadge";
import type { Platform, Project } from "@/config/projects";

export function ProjectCard({
  project,
  links,
  category,
  tagline,
  marketLabel,
  platformLabels,
}: {
  project: Project;
  links: { name: string; url: string }[];
  category: string;
  tagline: string;
  marketLabel: string;
  platformLabels: Record<Platform, string>;
}) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            {project.logo && (
              // eslint-disable-next-line @next/next/no-img-element -- fixed-size static SVG icons, no need for next/image
              <img src={project.logo} alt="" className="h-8 w-8 rounded-lg" />
            )}
            <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          </div>
          <div className="flex flex-wrap justify-end gap-1.5">
            <MarketBadge market={project.market} label={marketLabel} />
            {project.platforms.map((platform) => (
              <PlatformBadge key={platform} platform={platform} label={platformLabels[platform]} />
            ))}
          </div>
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
