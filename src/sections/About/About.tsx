import Reveal from '../../components/animations/Reveal';
import SectionHeader from '../../components/ui/SectionHeader';
import { about } from '../../data/content';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="about-title" index={about.index} title={about.title} />
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
          <Reveal className="space-y-6 md:col-span-7 md:col-start-3">
            <p className="text-pretty text-[22px] leading-[1.45] tracking-[-0.01em] md:text-[26px]">
              {about.paragraphs[0]}
            </p>
            {about.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph} className="text-pretty text-lg leading-[1.65] text-ink-2">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-3">
            <p className="text-sm text-ink-3">Подход</p>
            <ol className="mt-4 border-t border-line">
              {about.principles.map((principle, index) => (
                <li key={principle} className="flex h-12 items-center gap-4 border-b border-line text-[15px]">
                  <span className="w-5 font-mono text-[12px] text-ink-3 tabular-nums">{index + 1}</span>
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
