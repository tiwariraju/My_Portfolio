import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import ProjectCard from './ui/ProjectCard';
import { PORTFOLIO_PROJECTS, PORTFOLIO_FILTERS } from '../data/projects';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-dark-card">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          tag="Portfolio"
          title="My Projects"
          description="Here are some of my notable projects that showcase my technical skills and problem-solving abilities."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.id
                  ? 'bg-accent text-dark border border-accent'
                  : 'bg-transparent text-muted border border-white/15 hover:border-accent hover:text-accent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="sync">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  {...project}
                  variant="portfolio"
                  index={index}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
