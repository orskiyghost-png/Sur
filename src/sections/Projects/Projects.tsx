import { ArrowUpRight } from 'lucide-react';
import Reveal from '../../components/animations/Reveal';
import ButtonLink from '../../components/ui/ButtonLink';
import SectionHeader from '../../components/ui/SectionHeader';
import { personalInfo, projects } from '../../data/content';

const blocks = ['bg-cobalt-soft text-ink', 'bg-sky text-ink', 'bg-cobalt text-surface'];
const widths = ['md:w-[72%]', 'md:w-[86%]', 'md:w-full'];

export default function Projects() {
  const telegram = personalInfo.contacts.find((link) => link.id === 'telegram');

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-y">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="projects-title" index={projects.index} title={projects.title} />
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4 md:col-start-3">
            <p className="font-display text-[22px] leading-[1.3] font-medium">{projects.status}</p>
            <p className="mt-4 text-pretty text-base leading-[1.7] text-ink-2">{projects.description}</p>
            {telegram && (
              <ButtonLink href={telegram.href} target="_blank" rel="noopener noreferrer" className="mt-8">
                {projects.action}
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
              </ButtonLink>
            )}
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-6">
            <p className="font-mono text-[12px] text-ink-3">Структура кейса</p>
            <ol className="mt-4 space-y-2">
              {projects.caseStructure.map((part, index) => (
                <li
                  key={part.title}
                  className={`ml-auto grid grid-cols-[32px_1fr] gap-x-4 rounded-xl px-6 py-5 ${blocks[index % blocks.length]} ${widths[index % widths.length]}`}
                >
                  <span className="pt-0.5 font-mono text-[12px] tabular-nums opacity-70">0{index + 1}</span>
                  <div>
                    <p className="text-base font-medium">{part.title}</p>
                    <p className="mt-1 text-[15px] opacity-80">{part.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
