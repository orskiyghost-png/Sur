import { ArrowUpRight, Send } from 'lucide-react';
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
          <ul className="grid gap-3 md:col-span-10 md:col-start-3 md:grid-cols-5">
            {personalInfo.contacts.map((link, index) => {
              const primary = index === 0;
              return (
                <li key={link.id} className={primary ? 'md:col-span-3' : 'md:col-span-2'}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex h-full min-h-40 flex-col justify-between gap-8 rounded-2xl p-6 transition-colors duration-150 ease-soft md:p-8 ${
                      primary ? 'bg-cobalt hover:bg-cobalt-hover' : 'bg-night-2 hover:bg-night-3'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span className={`text-sm ${primary ? 'text-sky-soft' : 'text-snow-3'}`}>{link.label}</span>
                      {primary ? (
                        <Send size={20} strokeWidth={1.5} aria-hidden className="text-sky-soft" />
                      ) : (
                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.5}
                          aria-hidden
                          className="text-snow-3 transition-[transform,color] duration-150 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-snow"
                        />
                      )}
                    </span>
                    <span className="font-display text-[22px] leading-tight text-snow [overflow-wrap:anywhere] sm:text-[28px]">
                      {link.handle}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
