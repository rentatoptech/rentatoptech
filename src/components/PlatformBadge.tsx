import type { Platform } from "@/config/projects";

const ICON: Record<Platform, string> = {
  web: "🌐",
  android: "🤖",
};

export function PlatformBadge({ platform, label }: { platform: Platform; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted">
      <span aria-hidden="true">{ICON[platform]}</span>
      {label}
    </span>
  );
}
