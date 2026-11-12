interface LogoMarkProps {
  className?: string;
}

export default function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <rect width="32" height="32" rx="6" fill="var(--color-cobalt)" />
      <rect x="7" y="7" width="8" height="18" fill="var(--color-paper)" />
      <circle cx="21" cy="11" r="4" fill="var(--color-sky)" />
      <rect x="17" y="17" width="8" height="8" fill="var(--color-paper)" />
    </svg>
  );
}
