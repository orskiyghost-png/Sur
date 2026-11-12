import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contactNav, headerAction, navigation, personalInfo } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';
import ButtonLink from '../ui/ButtonLink';
import LogoMark from '../ui/LogoMark';

const sectionIds = [...navigation, contactNav].map((item) => item.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" onClick={close} className="flex items-center gap-3 text-[16px] leading-none font-medium">
          <LogoMark className="size-8" />
          <span>
            {personalInfo.firstName} {personalInfo.lastName}
          </span>
        </a>

        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const current = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={current ? 'true' : undefined}
                    className={`rounded-md px-3 py-2 text-sm transition-colors duration-150 ease-soft ${
                      current ? 'bg-cobalt-soft text-cobalt' : 'text-ink-2 hover:bg-paper hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ButtonLink href="#contacts" size="sm">
              {headerAction}
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-ink transition-colors duration-150 ease-soft hover:bg-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" hidden={!open} aria-label="Мобильная навигация" className="border-t border-line md:hidden">
        <ul className="container-page flex flex-col gap-1 py-3">
          {[...navigation, contactNav].map((item) => {
            const current = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  aria-current={current ? 'true' : undefined}
                  className={`-mx-3 flex h-11 items-center rounded-md px-3 text-[15px] transition-colors duration-150 ease-soft ${
                    current ? 'bg-cobalt-soft text-cobalt' : 'text-ink-2 hover:bg-paper hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
