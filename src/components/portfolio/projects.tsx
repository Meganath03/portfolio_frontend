import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Atom, Table, CloudRain, TrendingUp, Car } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Quantum-Infused Cosmetic Simulation',
    description: 'A quantum-enhanced simulation platform that predicts cosmetic surgery outcomes using QGANs, machine learning, and deep learning models for accurate image processing.',
    icon: Atom,
    gradient: 'from-purple-500 to-pink-500',
    hoverColor: 'group-hover:text-purple-400',
    tags: ['Quantum Computing', 'Deep Learning', 'QGANs'],
    tagColors: ['bg-purple-500/20 text-purple-300', 'bg-blue-500/20 text-blue-300', 'bg-pink-500/20 text-pink-300']
  },
  {
    id: 2,
    title: 'Interactive Web-Based Periodic Table',
    description: 'Dynamic periodic table with real-time search, filtering, detailed element information, and customizable color-coding for enhanced learning experience.',
    icon: Table,
    gradient: 'from-green-500 to-teal-500',
    hoverColor: 'group-hover:text-green-400',
    tags: ['HTML/CSS', 'JavaScript', 'Interactive UI'],
    tagColors: ['bg-green-500/20 text-green-300', 'bg-yellow-500/20 text-yellow-300', 'bg-teal-500/20 text-teal-300']
  },
  {
    id: 3,
    title: 'Rainfall & Dam Water Management',
    description: 'ML-powered system using LSTM, SVR, XGBoost, and Random Forest for 10-day rainfall forecasting and optimal water discharge management.',
    icon: CloudRain,
    gradient: 'from-blue-500 to-cyan-500',
    hoverColor: 'group-hover:text-blue-400',
    tags: ['LSTM', 'XGBoost', 'Random Forest'],
    tagColors: ['bg-blue-500/20 text-blue-300', 'bg-cyan-500/20 text-cyan-300', 'bg-indigo-500/20 text-indigo-300']
  },
  {
    id: 4,
    title: 'Stock Market Prediction with LSTM',
    description: 'Deep learning approach to stock market forecasting using LSTM networks with comprehensive data normalization and performance evaluation techniques.',
    icon: TrendingUp,
    gradient: 'from-orange-500 to-red-500',
    hoverColor: 'group-hover:text-orange-400',
    tags: ['LSTM', 'Deep Learning', 'Time Series'],
    tagColors: ['bg-orange-500/20 text-orange-300', 'bg-red-500/20 text-red-300', 'bg-yellow-500/20 text-yellow-300']
  },
  {
    id: 5,
    title: 'EV Performance Monitoring',
    description: 'IoT-integrated system combining TEG technology for waste heat conversion with real-time monitoring to enhance electric vehicle energy management and range.',
    icon: Car,
    gradient: 'from-emerald-500 to-green-500',
    hoverColor: 'group-hover:text-emerald-400',
    tags: ['IoT', 'TEG', 'Energy Management'],
    tagColors: ['bg-emerald-500/20 text-emerald-300', 'bg-green-500/20 text-green-300', 'bg-teal-500/20 text-teal-300']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Exploring the frontiers of AI, Quantum Computing, and Machine Learning through innovative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.id}
                className={`animate-on-scroll bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 transition-colors text-slate-900 dark:text-white ${project.hoverColor}`}>
                      {project.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className={`${project.tagColors[tagIndex]} text-xs font-medium`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
