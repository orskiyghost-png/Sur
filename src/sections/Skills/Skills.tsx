import { skills } from '../../data/content';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-black text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Направления работы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors"
            >
              {/* Number */}
              <div className="text-sm text-gray-400 font-mono mb-4">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 
                className="text-xl md:text-2xl font-semibold mb-4 text-black"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}