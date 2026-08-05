import type { Market } from "@/config/projects";

const ICON: Record<Market, string> = {
  spain: "🇪🇸",
  international: "🌍",
};

export function MarketBadge({ market, label }: { market: Market; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted">
      <span aria-hidden="true">{ICON[market]}</span>
      {label}
    </span>
  );
}
