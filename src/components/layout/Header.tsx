import { personalInfo } from '../../data/content';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-semibold text-black hover:opacity-70 transition-opacity"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {personalInfo.firstName} {personalInfo.lastName}
          </button>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Обо мне
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Компетенции
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Проекты
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacts')}
                  className="text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.toggle('hidden');
              }
            }}
            aria-label="Меню"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  onClick={() => {
                    scrollToSection('about');
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className="text-sm text-gray-700 hover:text-black transition-colors block w-full text-left"
                >
                  Обо мне
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('skills');
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className="text-sm text-gray-700 hover:text-black transition-colors block w-full text-left"
                >
                  Компетенции
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('projects');
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className="text-sm text-gray-700 hover:text-black transition-colors block w-full text-left"
                >
                  Проекты
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection('contacts');
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className="text-sm text-gray-700 hover:text-black transition-colors block w-full text-left"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}