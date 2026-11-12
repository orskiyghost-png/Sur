import Reveal from '../../components/animations/Reveal';
import SectionHeader from '../../components/ui/SectionHeader';
import { skills, skillsHeading } from '../../data/content';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-y bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="skills-title" index={skillsHeading.index} title={skillsHeading.title} />
        </Reveal>

        <ul className="mt-12 md:mt-16">
          {skills.map((skill, index) => (
            <Reveal
              as="li"
              key={skill.id}
              delay={index * 0.05}
              className="grid gap-4 border-t border-line py-10 last:border-b md:grid-cols-12 md:gap-8 md:py-12"
            >
              <span className="font-mono text-[13px] text-ink-3 tabular-nums md:col-span-2 md:pt-1.5">
                {skillsHeading.index}.{index + 1}
              </span>
              <h3 className="text-balance text-2xl leading-[1.25] font-medium tracking-[-0.015em] md:col-span-4">
                {skill.title}
              </h3>
              <div className="md:col-span-6">
                <p className="text-pretty text-base leading-[1.7] text-ink-2">{skill.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Фокус">
                  {skill.focus.map((focus) => (
                    <li
                      key={focus}
                      className="rounded-md border border-line bg-paper px-2.5 py-1 text-[13px] leading-5 text-ink-2"
                    >
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
