import Reveal from '../../components/animations/Reveal';
import SectionHeader from '../../components/ui/SectionHeader';
import { process } from '../../data/content';

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="on-cobalt section-y bg-cobalt text-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="process-title" index={process.index} title={process.title} tone="cobalt">
            <p className="mt-4 text-lg text-sky-soft">{process.lead}</p>
          </SectionHeader>
        </Reveal>

        <ol className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 0.05}
              className={`flex flex-col rounded-2xl p-6 md:p-8 ${
                index === process.steps.length - 1 ? 'bg-surface text-ink' : 'bg-cobalt-hover'
              }`}
            >
              <span
                className={`font-display text-[44px] leading-none font-semibold tabular-nums ${
                  index === process.steps.length - 1 ? 'text-cobalt' : 'text-sky'
                }`}
              >
                {step.number}
              </span>
              <h3 className="mt-10 text-lg leading-[1.3] font-medium md:mt-16">{step.title}</h3>
              <p
                className={`mt-2 text-pretty text-[15px] leading-[1.6] ${
                  index === process.steps.length - 1 ? 'text-ink-2' : 'text-sky-soft'
                }`}
              >
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
