import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-card hover:shadow-glow-sm ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
