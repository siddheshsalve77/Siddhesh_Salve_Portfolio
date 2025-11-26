import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, BarChart3, Brain, MessageSquare, Users, Clock, Target } from 'lucide-react';
import { Card3D } from '../Card3D';

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    {
      category: 'Programming & Querying',
      icon: Code2,
      color: 'from-cyan-500 to-blue-500',
      skills: ['SQL', 'Python'],
    },
    {
      category: 'Data Visualization Tools',
      icon: BarChart3,
      color: 'from-blue-500 to-violet-500',
      skills: ['Advanced MS Excel', 'Power BI', 'Tableau'],
    },
    {
      category: 'Analytical Abilities',
      icon: Brain,
      color: 'from-violet-500 to-pink-500',
      skills: ['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'Insight Generation', 'Data Modeling', 'ETL'],
    },
  ];

  const softSkills = [
    { name: 'Communication', icon: MessageSquare },
    { name: 'Problem Solving', icon: Target },
    { name: 'Teamwork', icon: Users },
    { name: 'Time Management', icon: Clock },
  ];

  return (
    <section id="skills" className="relative py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 perspective-1000">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card3D className="h-full">
                <div className="glass rounded-2xl p-8 h-full shadow-depth-2 hover:shadow-depth-3 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-neon-cyan transform-gpu`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-slate-200 mb-6">{category.category}</h4>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-slate-400">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-center text-slate-200 mb-12">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 perspective-1000">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <Card3D intensity={10}>
                  <div className="glass rounded-2xl p-6 text-center shadow-depth-2 hover:shadow-neon-cyan transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-full flex items-center justify-center">
                      <skill.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-slate-300">{skill.name}</div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}