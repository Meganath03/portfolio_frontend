import { useState, useEffect } from 'react';
import { Menu, X, Download, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Internships', href: '#internships' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/Meganath_Resume_1750392293422.pdf';
    link.download = 'Meganath_N_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gradient">
              Meganath N
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-purple-700 dark:text-purple-400'
                      : 'text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/Meganath03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <Button
                onClick={handleDownloadResume}
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300"
              >
                <Download size={16} className="mr-2" />
                Resume
              </Button>
              <ThemeToggle />
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-purple-700 dark:text-purple-400'
                    : 'text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2 space-y-2">
              <a
                href="https://github.com/Meganath03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
              <Button
                onClick={() => {
                  handleDownloadResume();
                  setIsMenuOpen(false);
                }}
                size="sm"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
