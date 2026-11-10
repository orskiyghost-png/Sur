import { projectsPlaceholder } from '../../data/content';

export default function Portfolio() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-black text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {projectsPlaceholder.title}
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
            <p className="text-xl text-gray-700 mb-4">
              {projectsPlaceholder.description}
            </p>
            <p className="text-base text-gray-500">
              {projectsPlaceholder.note}
            </p>
          </div>

          {/* Placeholder for future FlexCarousel */}
          <div className="mt-12 text-sm text-gray-400">
            <p>Здесь будет галерея проектов с FlexCarousel</p>
          </div>
        </div>
      </div>
    </section>
  );
}