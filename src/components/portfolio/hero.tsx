import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Meganath_Resume_1750392293422.pdf';
    link.download = 'Meganath_N_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background with theme-aware gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-blue-900/20"></div>
      <div className="absolute inset-0 dark:bg-pattern opacity-40"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Avatar className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-4 border-white dark:border-slate-700 shadow-2xl">
                <AvatarImage 
                  src="/profile-photo.jpg" 
                  alt="Meganath N" 
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                  MN
                </AvatarFallback>
              </Avatar>
              {/* Floating ring animation */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">
              Meganath N
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-light">
            Full Stack Developer | Quantum & ML Enthusiast
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about developing innovative solutions at the intersection of Quantum Computing, 
            Machine Learning, and Full-Stack Development. Expert in modern web technologies with focus on scalable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-500 dark:border-slate-400 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-4 font-semibold transition-all duration-300"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Resume Download and Communication Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownloadResume}
              className="bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-200 hover:bg-slate-400 dark:hover:bg-slate-600 px-6 py-3 font-medium transition-all duration-300 rounded-lg inline-flex items-center"
            >
              <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V14M12 14L8 10M12 14L16 10M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Resume
            </button>
            <a
              href="mailto:meganath.natesan@gmail.com"
              className="bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-200 hover:bg-slate-400 dark:hover:bg-slate-600 px-6 py-3 font-medium transition-all duration-300 rounded-lg inline-flex items-center"
            >
              <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Email Me
            </a>
          </div>
        </div>
        
        {/* Floating elements with theme awareness */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/40 dark:bg-purple-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200/40 dark:bg-blue-500/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-pink-200/40 dark:bg-pink-500/20 rounded-full animate-float-delayed-2"></div>
      </div>
    </section>
  );
}
