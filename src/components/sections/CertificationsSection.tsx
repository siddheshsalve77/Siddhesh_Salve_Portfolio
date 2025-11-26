import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import { Card3D } from '../Card3D';

export function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      name: 'SQL (Intermediate)',
      provider: 'HackerRank',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Business Analysis with Excel',
      provider: 'Simplilearn',
      color: 'from-blue-500 to-violet-500',
    },
    {
      name: 'Data Analytics with Power BI and ChatGPT',
      provider: 'Infosys Foundation',
      color: 'from-violet-500 to-pink-500',
    },
    {
      name: 'Python for Data Science',
      provider: 'Saylor Academy',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="certifications" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 perspective-1000">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card3D className="h-full" intensity={10}>
                <div className="glass rounded-2xl p-8 h-full shadow-depth-2 hover:shadow-neon-cyan transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center flex-shrink-0 transform-gpu hover:scale-110 transition-transform shadow-neon-cyan`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-slate-200 mb-2">{cert.name}</h4>
                      <p className="text-slate-400 mb-4">{cert.provider}</p>
                      <motion.button
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}