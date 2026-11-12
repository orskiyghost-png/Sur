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
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,border-color,color,transform] duration-150 ease-soft active:scale-[0.98]';

const sizes: Record<Size, string> = {
  md: 'h-12 rounded-[10px] px-5 text-[15px]',
  sm: 'h-9 rounded-lg px-4 text-sm',
};

const variants: Record<Tone, Record<Variant, string>> = {
  paper: {
    primary: 'bg-ink text-paper hover:bg-[#2b2b2a]',
    secondary: 'border border-line-strong bg-surface text-ink hover:bg-raised',
  },
  night: {
    primary: 'bg-snow text-night hover:bg-white',
    secondary: 'border border-line-night bg-night-2 text-snow hover:bg-night-3',
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
