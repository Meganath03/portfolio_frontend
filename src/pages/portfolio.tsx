import { useEffect } from 'react';
import Navbar from '@/components/portfolio/navbar';
import Hero from '@/components/portfolio/hero';
import Projects from '@/components/portfolio/projects';
import Skills from '@/components/portfolio/skills';
import Internships from '@/components/portfolio/internships';
import Achievements from '@/components/portfolio/achievements';
import Contact from '@/components/portfolio/contact';
import Footer from '@/components/portfolio/footer';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

export default function Portfolio() {
  useSmoothScroll();

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white min-h-screen overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Internships />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
