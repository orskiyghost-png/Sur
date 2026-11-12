import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';
type Tone = 'paper' | 'night';
type Size = 'md' | 'sm';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  children: ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,transform] duration-150 ease-soft active:translate-y-px';

const sizes: Record<Size, string> = {
  md: 'h-12 rounded-lg px-5 text-[15px]',
  sm: 'h-9 rounded-md px-4 text-sm',
};

const variants: Record<Tone, Record<Variant, string>> = {
  paper: {
    primary: 'bg-cobalt text-surface hover:bg-cobalt-hover',
    secondary: 'bg-cobalt-soft text-cobalt hover:bg-sky-soft',
  },
  night: {
    primary: 'bg-snow text-night hover:bg-surface',
    secondary: 'bg-night-2 text-snow hover:bg-night-3',
  },
};

export default function ButtonLink({
  variant = 'primary',
  tone = 'paper',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${sizes[size]} ${variants[tone][variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
