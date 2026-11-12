import { ArrowUpRight } from 'lucide-react';
import Reveal from '../../components/animations/Reveal';
import ButtonLink from '../../components/ui/ButtonLink';
import SectionHeader from '../../components/ui/SectionHeader';
import { personalInfo, projects } from '../../data/content';

export default function Projects() {
  const telegram = personalInfo.contacts.find((link) => link.id === 'telegram');

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-y bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="projects-title" index={projects.index} title={projects.title} />
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4 md:col-start-3">
            <p className="text-[22px] leading-[1.3] font-medium tracking-[-0.01em]">{projects.status}</p>
            <p className="mt-4 text-pretty text-base leading-[1.7] text-ink-2">{projects.description}</p>
            {telegram && (
              <ButtonLink
                href={telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-8"
              >
                {projects.action}
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
              </ButtonLink>
            )}
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-6">
            <div className="rounded-2xl border border-line bg-paper p-2">
              <p className="flex h-10 items-center px-4 font-mono text-[12px] text-ink-3">Структура кейса</p>
              <ol className="overflow-hidden rounded-[10px] border border-line bg-surface">
                {projects.caseStructure.map((part, index) => (
                  <li
                    key={part.title}
                    className="grid grid-cols-[32px_1fr] gap-x-4 border-b border-line px-5 py-5 last:border-b-0"
                  >
                    <span className="pt-0.5 font-mono text-[12px] text-ink-3 tabular-nums">0{index + 1}</span>
                    <div>
                      <p className="text-base font-medium">{part.title}</p>
                      <p className="mt-1 text-[15px] text-ink-2">{part.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
