import type { ReactNode } from 'react';

type Tone = 'paper' | 'night' | 'cobalt';

interface SectionHeaderProps {
  index: string;
  title: string;
  id?: string;
  tone?: Tone;
  children?: ReactNode;
}

const badge: Record<Tone, string> = {
  paper: 'bg-cobalt text-surface',
  night: 'bg-snow text-night',
  cobalt: 'bg-snow text-cobalt',
};

export default function SectionHeader({ index, title, id, tone = 'paper', children }: SectionHeaderProps) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-2 md:pt-2">
        <span
          className={`inline-flex h-8 min-w-12 items-center justify-center rounded-md px-2 font-mono text-[13px] font-medium tabular-nums ${badge[tone]}`}
        >
          {index}
        </span>
      </div>
      <div className="md:col-span-10">
        <h2
          id={id}
          className="font-display text-balance text-[28px] leading-[1.15] font-medium sm:text-[34px] md:text-[42px]"
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
