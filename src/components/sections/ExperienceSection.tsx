import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = {
    title: 'Data Analyst Intern',
    company: 'Cognifyz Solutions',
    location: 'Remote',
    period: 'April 2025 – June 2025',
    responsibilities: [
      'Executed a virtual internship focused on exploratory data analysis and data visualization to derive business insights.',
      'Developed and implemented data cleaning workflows, standardizing raw data and enhancing its accuracy and readiness for reporting.',
    ],
  };

  return (
    <section id="experience" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative pl-8 border-l-2 border-cyan-500/30"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Timeline Dot */}
            <motion.div
              className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 glow-cyan"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="glass glass-hover rounded-2xl p-8 ml-6"
              whileHover={{ x: 10 }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between mb-6">
                <div>
                  <h3 className="text-slate-200 mb-2">{experience.title}</h3>
                  <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{experience.company}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{experience.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Calendar className="w-5 h-5" />
                  <span>{experience.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                {experience.responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                    <p className="text-slate-400 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
