import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code, TrendingUp, Users, Target } from 'lucide-react';
import { Card3D } from '../Card3D';

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '664K+', label: 'Records Analyzed', icon: TrendingUp },
    { value: '2+', label: 'Projects Completed', icon: Target },
    { value: '4+', label: 'Certifications', icon: Code },
    { value: '100%', label: 'Client Satisfaction', icon: Users },
  ];

  return (
    <section id="about" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-4 py-2 glass rounded-full mb-6 shadow-depth-1"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}
            >
              <span className="text-cyan-400">👋 Let me introduce myself</span>
            </motion.div>

            <h3 className="mb-6 text-slate-200">
              Transforming Data into Business Growth
            </h3>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              Results-driven Data Analyst with advanced proficiency in SQL, Python, Excel, and Power BI, 
              specializing in transforming raw data into business growth. Demonstrated success delivering 
              actionable insights and user-centric dashboards.
            </p>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Passionate about leveraging data to drive growth and operational excellence. Actively seeking 
              an entry-level Data Analyst position in a dynamic organization to contribute technical expertise 
              and analytical thinking.
            </p>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass rounded-full hover:bg-slate-800/50 transition-all btn-3d shadow-neon-cyan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6 perspective-1000"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card3D intensity={12}>
                  <div className="glass p-8 rounded-2xl text-center shadow-depth-2 hover:shadow-neon-cyan transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center transform-gpu hover:scale-110 transition-transform">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <motion.div 
                      className="text-4xl font-bold gradient-text mb-2"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}