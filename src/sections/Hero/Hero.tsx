import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ButtonLink from '../../components/ui/ButtonLink';
import { hero, personalInfo } from '../../data/content';
import Workbench from './Workbench';

const ease = [0.22, 1, 0.36, 1] as const;

const group = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

export default function Hero() {
  return (
    <section id="top" aria-label="Главная" className="flex min-h-[100svh] items-center pt-16">
      <m.div
        variants={group}
        initial="hidden"
        animate="show"
        className="container-page grid items-center gap-16 py-16 md:py-24 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-6">
          <m.p variants={item} className="text-[15px] text-ink-2">
            {personalInfo.fullName}
          </m.p>
          <m.h1
            variants={item}
            className="mt-5 text-balance text-[40px] leading-[1.05] font-medium tracking-[-0.03em] sm:text-[52px] lg:text-[56px]"
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

        <m.div variants={item} className="lg:col-span-6">
          <Workbench />
        </m.div>
      </m.div>
    </section>
  );
}
