import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Medal, Star, Atom, Users, Code, Award, GraduationCap } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Google Developer Group Conference',
    description: 'Attended GDG Conference in Bangalore, gaining insights into latest developer technologies and networking with industry professionals.',
    icon: Trophy,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 2,
    title: 'SAP HACKFEST 2K23',
    description: 'Reached regional round at SSN College, Chennai with innovative project on "Economic Growth and Job Security".',
    icon: Medal,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    id: 3,
    title: 'NCAT Rank 45',
    description: 'Achieved rank 45 in NCAT examination, demonstrating strong academic performance and competitive skills.',
    icon: Star,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    title: 'Quantum Hackathon - Top 2',
    description: 'Selected as one of the top two teams in Quantum Hackathon conducted by NITTE, Bangalore.',
    icon: Atom,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    title: 'Leadership Roles',
    description: 'Class Representative and Department President (2024-2025), showcasing leadership and organizational skills.',
    icon: Users,
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    id: 6,
    title: 'Smart India Hackathon',
    description: 'Participated in Smart India Hackathon 2023, contributing innovative solutions to real-world problems.',
    icon: Code,
    gradient: 'from-red-500 to-pink-500'
  }
];

const academicStats = [
  { label: 'Current CGPA (5 semesters)', value: '9.7/10' },
  { label: 'HSC (Higher Secondary)', value: '89.8%' },
  { label: 'SSLC (Secondary School)', value: '97%' }
];

const additionalRecognitions = [
  '2nd place in Tamil Competition, Dr.N.G.P Arts and Science College',
  'Completed Java Internship at CODSOFT (April 2024)',
  'B.Tech AI & Data Science, Dr.N.G.P. Institute of Technology'
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-yellow">
              Achievements & Recognition
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Awards, competitions, and leadership roles that showcase dedication and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={achievement.id}
                className="animate-on-scroll bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${achievement.gradient} rounded-lg flex items-center justify-center mr-3`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{achievement.title}</h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="animate-on-scroll bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">Academic Excellence</h3>
              <div className="space-y-3">
                {academicStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300">{stat.label}</span>
                    <span className="text-slate-900 dark:text-white font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-on-scroll bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700 dark:text-orange-400">Additional Recognition</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                {additionalRecognitions.map((recognition, index) => (
                  <li key={index} className="flex items-center">
                    {index === 0 && <Award className="text-orange-700 dark:text-orange-400 mr-2" size={16} />}
                    {index === 1 && <Code className="text-orange-700 dark:text-orange-400 mr-2" size={16} />}
                    {index === 2 && <GraduationCap className="text-orange-700 dark:text-orange-400 mr-2" size={16} />}
                    {recognition}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
