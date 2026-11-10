import { about } from '../../data/content';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {about.title}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            {about.description.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}