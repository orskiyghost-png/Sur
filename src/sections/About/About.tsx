import Reveal from '../../components/animations/Reveal';
import SectionHeader from '../../components/ui/SectionHeader';
import { about } from '../../data/content';

const steps = ['bg-cobalt-soft text-ink', 'bg-sky text-ink', 'bg-cobalt text-surface'];
const offsets = ['md:ml-0', 'md:ml-6', 'md:ml-12'];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="about-title" index={about.index} title={about.title} />
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
          <Reveal className="space-y-6 md:col-span-6 md:col-start-3">
            <p className="text-pretty text-[21px] leading-[1.5] md:text-[24px]">{about.paragraphs[0]}</p>
            {about.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph} className="text-pretty text-lg leading-[1.65] text-ink-2">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-4">
            <p className="text-sm text-ink-3">Подход</p>
            <ol className="mt-4 space-y-2">
              {about.principles.map((principle, index) => (
                <li
                  key={principle}
                  className={`flex h-14 items-center gap-4 rounded-lg px-5 text-[15px] font-medium ${steps[index % steps.length]} ${offsets[index % offsets.length]}`}
                >
                  <span className="w-5 font-mono text-[12px] tabular-nums opacity-70">0{index + 1}</span>
                  {principle}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
