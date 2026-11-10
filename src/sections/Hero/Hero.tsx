import { personalInfo } from '../../data/content';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="container-custom text-center">
        {/* Main heading */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-black"
          style={{ 
            fontFamily: 'var(--font-heading)',
            lineHeight: '1.1'
          }}
        >
          {personalInfo.fullName}
        </h1>

        {/* Roles */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            {personalInfo.roles[0]}
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            {personalInfo.roles[1]} • {personalInfo.roles[2]}
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Смотреть проекты
          </button>
          <button
            onClick={() => scrollToSection('contacts')}
            className="px-8 py-4 border-2 border-black text-black text-sm font-medium rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            Связаться
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20">
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
            aria-label="Прокрутить вниз"
          >
            <span className="text-xs uppercase tracking-wider">Прокрутить</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}