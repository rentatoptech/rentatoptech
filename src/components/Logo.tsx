// Mark: a rounded square holding a roof/chevron pointing up — "rental"
// (the roof) and "top" (the upward point) in one shape. Paired with the
// lowercase wordmark, same construction as the products it lists.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="var(--color-primary)" />
      <path
        d="M11 24L20 13L29 24"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 27.5L20 22L24.5 27.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        rentatoptech
      </span>
    </span>
  );
}
