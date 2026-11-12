import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contactNav, headerAction, navigation, personalInfo } from '../../data/content';
import ButtonLink from '../ui/ButtonLink';

export default function Header() {
  const [open, setOpen] = useState(false);

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" onClick={close} className="text-[17px] leading-none font-medium tracking-[-0.01em]">
          {personalInfo.firstName} {personalInfo.lastName}
        </a>

        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-lg px-3 py-2 text-sm text-ink-2 transition-colors duration-150 ease-soft hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
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
            className="-mr-2 inline-flex size-10 items-center justify-center rounded-lg text-ink transition-colors duration-150 ease-soft hover:bg-raised md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" hidden={!open} aria-label="Мобильная навигация" className="border-t border-line md:hidden">
        <ul className="container-page flex flex-col py-3">
          {[...navigation, contactNav].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={close}
                className="flex h-11 items-center text-[15px] text-ink-2 transition-colors duration-150 ease-soft hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
