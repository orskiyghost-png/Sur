import { ArrowUpRight } from 'lucide-react';
import Reveal from '../../components/animations/Reveal';
import SectionHeader from '../../components/ui/SectionHeader';
import { contact, personalInfo } from '../../data/content';

export default function Contact() {
  return (
    <section id="contacts" aria-labelledby="contacts-title" className="on-night section-y bg-night text-snow">
      <div className="container-page">
        <Reveal>
          <SectionHeader id="contacts-title" index={contact.index} title={contact.headline} tone="night">
            <p className="mt-4 max-w-[36rem] text-pretty text-lg leading-[1.6] text-snow-2">{contact.description}</p>
          </SectionHeader>
        </Reveal>

        <Reveal delay={0.05} className="mt-12 md:mt-16 md:grid md:grid-cols-12 md:gap-8">
          <ul className="border-t border-line-night md:col-span-10 md:col-start-3">
            {personalInfo.contacts.map((link) => (
              <li key={link.id} className="border-b border-line-night">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-4 flex min-h-24 items-center justify-between gap-6 rounded-xl px-4 transition-colors duration-150 ease-soft hover:bg-night-2"
                >
                  <span className="grid gap-1 sm:grid-cols-[160px_1fr] sm:items-baseline sm:gap-8">
                    <span className="text-sm text-snow-3">{link.label}</span>
                    <span className="text-2xl tracking-[-0.015em] text-snow md:text-[32px]">{link.handle}</span>
                  </span>
                  <ArrowUpRight
                    size={24}
                    strokeWidth={1.5}
                    aria-hidden
                    className="shrink-0 text-snow-3 transition-[transform,color] duration-150 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-snow"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
