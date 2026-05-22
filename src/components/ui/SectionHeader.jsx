import { motion } from 'framer-motion';

export default function SectionHeader({ tag, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14 md:mb-16"
    >
      <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
        {tag}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">{title}</h2>
      {description && (
        <p className="text-muted-dim text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
