import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card3D } from '../Card3D';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Flipkart Ecommerce Sales Dashboard',
      description: 'Designed and implemented a comprehensive Power BI dashboard to analyze Flipkart\'s ecommerce sales data across multiple product categories, geographies, and time periods.',
      tools: ['Power BI', 'DAX', 'Data Modeling'],
      highlights: [
        'Built advanced KPIs for sales amount, total profit, and average order value (AOV)',
        'Supporting strategic decision-making and operational reporting',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Grocery Store Wars Analytics Dashboard',
      description: 'Built an interactive Power BI dashboard to compare Zepto and Blinkit by analyzing sales, customer preferences, delivery efficiency, and competitive trends across India\'s metro cities.',
      tools: ['Power BI', 'Python', 'SQL'],
      highlights: [
        'Processed and visualized over 664,000 transaction records',
        'Developed delivery and rating analytics modules showing average delivery time (15.49 min) and customer satisfaction (2.99/5)',
      ],
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80',
      color: 'from-blue-500 to-violet-500',
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card3D className="h-full" intensity={12}>
                <div className="glass rounded-2xl overflow-hidden h-full shadow-depth-3 hover:shadow-neon-blue transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10" />
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform-gpu transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <div className={`px-4 py-2 bg-gradient-to-r ${project.color} rounded-full flex items-center space-x-2 shadow-neon-cyan`}>
                        <TrendingUp className="w-4 h-4" />
                        <span>Live Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-slate-200 mb-4">{project.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-4 py-2 bg-slate-800/50 text-cyan-400 rounded-full text-sm shadow-depth-1 hover:shadow-neon-cyan transition-all duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${project.color}`} />
                          <p className="text-slate-400 text-sm">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* View Button */}
                    <motion.button
                      className={`w-full py-3 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center space-x-2 btn-3d`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
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