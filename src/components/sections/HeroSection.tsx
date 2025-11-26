import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, Database, BarChart3, TrendingUp, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import profileImage from 'figma:asset/c7b242076f7b9bec2fd05ea7612fc7ee5b743650.png';

export function HeroSection() {
  const roles = [
    'Data Analyst',
    'Data Engineer',
    'Business Analyst',
    'SQL Developer',
    'Power BI Developer',
    'Data Scientist',
    'Analytics Engineer',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change role every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Data Lines in Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <motion.path
            d="M 0 300 Q 400 200 800 300 T 1600 300"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="lineGradient">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Animated Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 glass rounded-full mb-8 glow-cyan"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400">Available for Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="mb-4">
                Hi, I'm <span className="gradient-text">Siddhesh Salve</span>
              </h1>
              
              {/* Animated Role Title */}
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRoleIndex}
                    className="text-2xl md:text-4xl font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="gradient-text">{roles[currentRoleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto lg:mx-0 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Results-driven Data Analyst with advanced proficiency in SQL, Python, Excel, and Power BI, 
              specializing in transforming raw data into business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full btn-3d shadow-neon-cyan"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 glass rounded-full btn-3d shadow-depth-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Profile Image with Data Visualization */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Animated Circular Progress Rings */}
              <svg className="absolute -inset-8 w-[120%] h-[120%]" viewBox="0 0 400 400">
                <motion.circle
                  cx="200"
                  cy="200"
                  r="180"
                  stroke="url(#ring1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="1130"
                  initial={{ strokeDashoffset: 1130 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="160"
                  stroke="url(#ring2)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="1005"
                  initial={{ strokeDashoffset: 1005 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="ring1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="ring2">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Glowing Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Profile Image */}
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Siddhesh Salve"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Data Icons */}
              <motion.div
                className="absolute -top-4 -right-4 glass p-4 rounded-2xl glow-cyan"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Database className="w-6 h-6 text-cyan-400" />
              </motion.div>
              <motion.div
                className="absolute top-1/4 -left-6 glass p-4 rounded-2xl glow-blue"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl glow-violet"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <BarChart3 className="w-6 h-6 text-violet-400" />
              </motion.div>
              <motion.div
                className="absolute bottom-1/3 -right-6 glass p-4 rounded-2xl glow-cyan"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Activity className="w-6 h-6 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="mt-16 mx-auto flex flex-col items-center text-slate-400 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}