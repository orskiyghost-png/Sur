import Reveal from '../../components/animations/Reveal';
import SectionHeader from '../../components/ui/SectionHeader';
import { process } from '../../data/content';

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-y">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="process-title" index={process.index} title={process.title}>
            <p className="mt-4 text-lg text-ink-2">{process.lead}</p>
          </SectionHeader>
        </Reveal>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 0.05} className="flex flex-col bg-paper p-6 md:p-8">
              <span className="font-mono text-[13px] text-ink-3 tabular-nums">{step.number}</span>
              <h3 className="mt-6 text-lg leading-[1.3] font-medium sm:mt-12 md:mt-16">{step.title}</h3>
              <p className="mt-2 text-pretty text-[15px] leading-[1.6] text-ink-2">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
