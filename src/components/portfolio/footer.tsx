import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Meganath N. Built with <span className="text-red-500 dark:text-red-400">❤️</span> using React & Tailwind CSS
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="https://linkedin.com/in/meganath-n-536b76274" 
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:meganath727803@gmail.com" 
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919385451050" 
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
