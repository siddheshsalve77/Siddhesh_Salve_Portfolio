import { motion } from 'motion/react';

export function DataVisualizationEffect() {
  // Generate random bar chart data
  const bars = Array.from({ length: 12 }, () => Math.random() * 100);
  
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-4 opacity-10">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-8 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
