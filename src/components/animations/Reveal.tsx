import { m } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li';
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Component = as === 'li' ? m.li : m.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.4, ease, delay }}
    >
      {children}
    </Component>
  );
}
