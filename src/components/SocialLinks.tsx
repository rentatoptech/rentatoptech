import { COMPANY } from "@/config/company";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.4.56.21.96.47 1.38.89.42.42.68.82.89 1.38.16.42.35 1.05.4 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.4 2.22-.21.56-.47.96-.89 1.38-.42.42-.82.68-1.38.89-.42.16-1.05.35-2.22.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.4a3.7 3.7 0 0 1-1.38-.89 3.7 3.7 0 0 1-.89-1.38c-.16-.42-.35-1.05-.4-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.8.4-2.22.21-.56.47-.96.89-1.38.42-.42.82-.68 1.38-.89.42-.16 1.05-.35 2.22-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.73.07-.96.04-1.48.2-1.82.34-.46.18-.78.39-1.13.73-.34.34-.55.67-.73 1.13-.14.34-.3.86-.34 1.82-.06 1.23-.07 1.6-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.82.18.46.39.78.73 1.13.34.34.67.55 1.13.73.34.14.86.3 1.82.34 1.23.06 1.6.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.82-.34.46-.18.78-.39 1.13-.73.34-.34.55-.67.73-1.13.14-.34.3-.86.34-1.82.06-1.23.07-1.6.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.82a2.9 2.9 0 0 0-.73-1.13 2.9 2.9 0 0 0-1.13-.73c-.34-.14-.86-.3-1.82-.34-1.23-.06-1.6-.07-4.73-.07Zm0 4.13a3.87 3.87 0 1 1 0 7.74 3.87 3.87 0 0 1 0-7.74Zm0 1.8a2.07 2.07 0 1 0 0 4.14 2.07 2.07 0 0 0 0-4.14Zm4.93-3.55a.93.93 0 1 1 0 1.86.93.93 0 0 1 0-1.86Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M21.58 7.2a2.7 2.7 0 0 0-1.9-1.92C18.05 4.8 12 4.8 12 4.8s-6.05 0-7.68.48a2.7 2.7 0 0 0-1.9 1.92A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .42 4.8 2.7 2.7 0 0 0 1.9 1.92c1.63.48 7.68.48 7.68.48s6.05 0 7.68-.48a2.7 2.7 0 0 0 1.9-1.92A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.42-4.8ZM9.9 15.4V8.6l5.6 3.4-5.6 3.4Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.25 10.2h3.38v9.3H5.25v-9.3Zm5.66 0h3.24v1.27h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18v4.6h-3.38v-4.08c0-.97-.02-2.22-1.36-2.22-1.36 0-1.57 1.06-1.57 2.15v4.15h-3.23v-9.3Z" />
    </svg>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  const links = [
    { href: COMPANY.social.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: COMPANY.social.youtube, label: "YouTube", Icon: YoutubeIcon },
    { href: COMPANY.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ];

  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="text-muted transition-colors hover:text-primary"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
