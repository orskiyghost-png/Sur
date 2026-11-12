import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Process from './sections/Process/Process';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only z-[60] rounded-md bg-cobalt px-4 py-2 text-sm text-surface focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Перейти к содержанию
        </a>
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Process />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
