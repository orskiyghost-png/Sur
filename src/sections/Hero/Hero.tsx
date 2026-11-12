import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ButtonLink from '../../components/ui/ButtonLink';
import { hero, personalInfo } from '../../data/content';
import Workbench from './Workbench';

const ease = [0.22, 1, 0.36, 1] as const;

const group = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

export default function Hero() {
  return (
    <section id="top" aria-label="Главная" className="flex min-h-[100svh] flex-col pt-16">
      <m.div
        variants={group}
        initial="hidden"
        animate="show"
        className="container-page grid flex-1 items-center gap-16 py-16 md:py-24 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-6">
          <m.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-md bg-cobalt-soft px-3 py-1.5 text-[14px] text-cobalt"
          >
            <span aria-hidden className="size-2 rounded-[2px] bg-cobalt" />
            {personalInfo.fullName}
          </m.p>
          <m.h1
            variants={item}
            className="font-display mt-6 text-balance text-[32px] leading-[1.12] font-medium sm:text-[42px] lg:text-[48px]"
          >
            {hero.headline}
          </m.h1>
          <m.p variants={item} className="mt-6 max-w-[36rem] text-pretty text-lg leading-[1.6] text-ink-2">
            {hero.lead}
          </m.p>
          <m.div variants={item} className="mt-10 flex flex-col gap-3 xs:flex-row">
            <ButtonLink href="#contacts">
              {hero.primaryAction}
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
            </ButtonLink>
            <ButtonLink href="#skills" variant="secondary">
              {hero.secondaryAction}
            </ButtonLink>
          </m.div>
        </div>

        <m.div variants={item} className="lg:col-span-6 lg:pl-6">
          <Workbench />
        </m.div>
      </m.div>

      <m.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35, ease }}
        aria-label="Роли"
        className="grid border-t border-line bg-surface md:grid-cols-3"
      >
        {personalInfo.roles.map((role, index) => (
          <li
            key={role}
            className="flex h-16 items-center gap-4 border-b border-line px-6 text-[15px] text-ink-2 last:border-b-0 md:justify-center md:border-r md:border-b-0 md:last:border-r-0"
          >
            <span className="font-mono text-[12px] text-cobalt tabular-nums">0{index + 1}</span>
            {role}
          </li>
        ))}
      </m.ul>
    </section>
  );
}
