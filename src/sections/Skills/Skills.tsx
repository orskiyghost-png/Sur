import { Bot, Code2, PenTool, type LucideIcon } from 'lucide-react';
import Reveal from '../../components/animations/Reveal';
import SectionHeader from '../../components/ui/SectionHeader';
import { skills, skillsHeading } from '../../data/content';
import type { Skill } from '../../types/content';

const icons: Record<Skill['id'], LucideIcon> = {
  design: PenTool,
  development: Code2,
  ai: Bot,
};

const tiles: Record<Skill['id'], string> = {
  design: 'bg-cobalt-soft text-cobalt',
  development: 'bg-cobalt text-surface',
  ai: 'bg-night text-sky',
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-y bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="skills-title" index={skillsHeading.index} title={skillsHeading.title} />
        </Reveal>

        <ul className="mt-12 grid gap-4 md:mt-16">
          {skills.map((skill, index) => {
            const Icon = icons[skill.id];
            return (
              <Reveal
                as="li"
                key={skill.id}
                delay={index * 0.05}
                className="grid gap-6 rounded-2xl bg-paper p-6 sm:p-8 md:grid-cols-12 md:gap-8 md:p-10"
              >
                <div className="flex items-start justify-between md:col-span-2 md:flex-col md:justify-start md:gap-6">
                  <span className={`grid size-14 place-items-center rounded-xl ${tiles[skill.id]}`}>
                    <Icon size={24} strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="font-mono text-[13px] text-ink-3 tabular-nums">
                    {skillsHeading.index}.{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-balance text-[22px] leading-[1.25] font-medium md:col-span-4 md:text-2xl">
                  {skill.title}
                </h3>
                <div className="md:col-span-6">
                  <p className="text-pretty text-base leading-[1.7] text-ink-2">{skill.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Фокус">
                    {skill.focus.map((focus) => (
                      <li
                        key={focus}
                        className="rounded-md bg-surface px-2.5 py-1 text-[13px] leading-5 font-medium text-cobalt"
                      >
                        {focus}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
