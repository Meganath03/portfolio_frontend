import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Building, CheckCircle } from 'lucide-react';

const internships = [
  {
    id: 1,
    company: 'NIT Trichy',
    role: 'Quantum Computing & Deep Learning Research',
    duration: 'July - August 2024',
    icon: GraduationCap,
    gradient: 'from-green-500 to-teal-500',
    borderColor: 'hover:border-green-500',
    achievements: [
      'Explored Quantum Computing integration with Deep Learning',
      'Implemented Quantum GANs using Qiskit and TensorFlow',
      'Gained experience in quantum circuits and variational algorithms'
    ],
    technologies: [
      { name: 'Qiskit', color: 'bg-green-500/20 text-green-300' },
      { name: 'TensorFlow', color: 'bg-blue-500/20 text-blue-300' },
      { name: 'Quantum GANs', color: 'bg-purple-500/20 text-purple-300' },
      { name: 'Python', color: 'bg-orange-500/20 text-orange-300' }
    ]
  },
  {
    id: 2,
    company: 'Centillion Labs',
    role: 'Data Engineering Intern',
    duration: 'January - February 2025',
    icon: Building,
    gradient: 'from-blue-500 to-purple-500',
    borderColor: 'hover:border-blue-500',
    achievements: [
      'Developed scalable data pipelines using PySpark',
      'Managed AWS infrastructure with Terraform',
      'Implemented Generative AI solutions with AWS Bedrock'
    ],
    technologies: [
      { name: 'PySpark', color: 'bg-blue-500/20 text-blue-300' },
      { name: 'AWS', color: 'bg-orange-500/20 text-orange-300' },
      { name: 'Terraform', color: 'bg-purple-500/20 text-purple-300' },
      { name: 'MongoDB', color: 'bg-green-500/20 text-green-300' },
      { name: 'AWS Bedrock', color: 'bg-red-500/20 text-red-300' }
    ]
  }
];

export default function Internships() {
  return (
    <section id="internships" className="py-20 bg-white dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-green">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Hands-on experience in cutting-edge research and industry applications
          </p>
        </div>

        <div className="space-y-12">
          {internships.map((internship) => {
            const IconComponent = internship.icon;
            return (
              <Card
                key={internship.id}
                className={`animate-on-scroll bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 ${internship.borderColor} transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${internship.gradient} rounded-full flex items-center justify-center mr-4`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{internship.company}</h3>
                        <p className={`font-medium ${internship.id === 1 ? 'text-green-700 dark:text-green-400' : 'text-blue-700 dark:text-blue-400'}`}>
                          {internship.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-slate-400">
                      <Badge variant="secondary" className="bg-slate-700 px-3 py-1 text-sm">
                        {internship.duration}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        {internship.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className={`mr-2 mt-1 ${internship.id === 1 ? 'text-green-700 dark:text-green-400' : 'text-blue-700 dark:text-blue-400'}`} size={16} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, index) => (
                          <Badge key={index} className={`${tech.color} text-sm`}>
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
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
