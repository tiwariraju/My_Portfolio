import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import TechBadge from './TechBadge';

const iconMap = {
  message: '💬',
  database: '🗄️',
  cart: '🛒',
  briefcase: '💼',
};

export default function ProjectCard({
  title,
  description,
  techStack = [],
  period,
  github,
  demo = '#',
  icon = 'briefcase',
  variant = 'portfolio',
  index = 0,
}) {
  const isFeatured = variant === 'featured';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className={`group flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:shadow-glow ${
        isFeatured ? 'hover:shadow-glow' : ''
      }`}
    >
      <div className="relative h-44 md:h-48 bg-gradient-to-br from-dark-elevated to-dark-card flex items-center justify-center overflow-hidden">
        <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">
          {iconMap[icon] || '📁'}
        </span>
        <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} GitHub`}
            className="w-12 h-12 rounded-full bg-dark/80 flex items-center justify-center text-gray-100 hover:bg-dark hover:scale-110 transition-transform"
          >
            <Github size={20} />
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo`}
            className="w-12 h-12 rounded-full bg-dark/80 flex items-center justify-center text-gray-100 hover:bg-dark hover:scale-110 transition-transform"
            onClick={(e) => demo === '#' && e.preventDefault()}
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-dim text-sm leading-relaxed mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {period && (
          <p className="text-muted text-sm font-medium mb-4">{period}</p>
        )}

        <div className="flex flex-wrap gap-3 mt-auto pt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/40 hover:bg-accent hover:text-dark transition-all"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-white/20 text-gray-200 hover:border-accent hover:text-accent transition-all"
            onClick={(e) => demo === '#' && e.preventDefault()}
            title="Live demo coming soon"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
