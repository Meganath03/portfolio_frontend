import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Languages, Atom } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: Code,
    gradient: 'from-orange-500 to-red-500',
    skills: [
      { name: 'HTML', color: 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300' },
      { name: 'CSS', color: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300' },
      { name: 'JavaScript', color: 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300' },
      { name: 'React', color: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300' }
    ]
  },
  {
    id: 2,
    title: 'Programming Languages',
    icon: Languages,
    gradient: 'from-blue-500 to-purple-500',
    skills: [
      { name: 'Python', color: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300' },
      { name: 'Java', color: 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300' },
      { name: 'Data Structures', color: 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300' },
      { name: 'Algorithms', color: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300' }
    ]
  },
  {
    id: 3,
    title: 'Advanced Technologies',
    icon: Atom,
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Quantum DL', color: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300' },
      { name: 'Machine Learning', color: 'bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300' },
      { name: 'DevOps', color: 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300' }
    ]
  }
];



export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Proficient in cutting-edge technologies spanning web development, AI, and quantum computing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="animate-on-scroll bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mr-3`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <Badge key={index} className={`${skill.color} text-sm font-medium`}>
                        {skill.name}
                      </Badge>
                    ))}
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
