import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Brain, Wrench, Sparkles } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import TechIcon, { getTechColor } from './ui/TechIcon';
import { SKILL_CATEGORIES } from '../data/skills';

const categoryIcons = {
  languages: Code2,
  frontend: Layout,
  backend: Server,
  databases: Database,
  core: Brain,
  tools: Wrench,
  ai: Sparkles,
};

function SkillItem({ skill, index }) {
  const brandColor = getTechColor(skill.icon);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.35 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-all duration-300 hover:shadow-glow-sm min-h-[120px]"
      style={{
        ['--glow-color']: `${brandColor}33`,
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${brandColor}22 0%, transparent 70%)`,
        }}
      />
      <div
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${brandColor}18`,
          boxShadow: `0 0 20px ${brandColor}25`,
        }}
      >
        <TechIcon id={skill.icon} size={32} />
      </div>
      <span className="relative text-xs sm:text-sm font-medium text-gray-200 text-center leading-snug group-hover:text-accent transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-card">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          tag="Skills"
          title="Technical Expertise"
          description="Technologies and tools I use to build scalable, recruiter-ready full-stack solutions."
        />

        <div className="space-y-10 md:space-y-12">
          {SKILL_CATEGORIES.map((category, catIndex) => {
            const CatIcon = categoryIcons[category.id] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 md:p-8 hover:border-accent/30 transition-colors duration-300 shadow-card"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                    <CatIcon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-100">{category.title}</h3>
                    <p className="text-muted text-sm">{category.skills.length} technologies</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {category.skills.map((skill, index) => (
                    <SkillItem key={`${category.id}-${skill.name}`} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
