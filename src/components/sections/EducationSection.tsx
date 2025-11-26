import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Maharashtra Institute of Technology',
      location: 'Aurangabad',
      period: '2024 – 2026',
      status: 'In Progress',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Modern College of Arts, Commerce and Science',
      location: 'Shivajinagar, Pune',
      period: '2021 – 2024',
      status: 'Completed',
      color: 'from-blue-500 to-violet-500',
    },
  ];

  return (
    <section id="education" className="relative py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="glass glass-hover rounded-2xl p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center flex-shrink-0 glow-cyan`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-slate-200 mb-2">{edu.degree}</h3>
                      <p className="text-slate-400">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 ml-20">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm ${
                    edu.status === 'In Progress' 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'bg-green-500/20 text-green-400'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
