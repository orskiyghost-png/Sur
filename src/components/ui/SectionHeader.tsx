import type { ReactNode } from 'react';

interface SectionHeaderProps {
  index: string;
  title: string;
  id?: string;
  tone?: 'paper' | 'night';
  children?: ReactNode;
}

export default function SectionHeader({ index, title, id, tone = 'paper', children }: SectionHeaderProps) {
  const night = tone === 'night';

  return (
    <div className={`grid gap-6 border-t pt-6 md:grid-cols-12 md:gap-8 ${night ? 'border-line-night' : 'border-line'}`}>
      <span
        className={`font-mono text-[13px] leading-5 tabular-nums md:col-span-2 md:pt-3 ${night ? 'text-snow-3' : 'text-ink-3'}`}
      >
        {index}
      </span>
      <div className="md:col-span-10">
        <h2
          id={id}
          className="text-balance text-[32px] leading-[1.1] font-medium tracking-[-0.02em] md:text-[44px]"
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
