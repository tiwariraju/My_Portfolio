import { motion } from 'framer-motion';
import { CheckCircle2, MapPin } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import TechIcon from './ui/TechIcon';
import { EXPERIENCE } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          tag="Experience"
          title="Professional Experience"
          description="Industry experience building real-world applications, leading teams, and collaborating in agile environments."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent hidden sm:block" />

          <div className="space-y-8 md:space-y-10">
            {EXPERIENCE.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative sm:pl-20"
              >
                <div className="hidden sm:flex absolute left-4 md:left-6 top-8 w-10 h-10 rounded-xl bg-dark border-2 border-accent items-center justify-center z-10 shadow-glow-sm">
                  <TechIcon id={exp.icon} size={22} />
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 md:p-8 hover:border-accent/50 hover:shadow-glow-sm transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div className="flex gap-4 items-start">
                      <div className="sm:hidden w-12 h-12 shrink-0 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                        <TechIcon id={exp.icon} size={24} />
                      </div>
                      <div>
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-2">
                          {exp.type}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-100 leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-semibold mt-1">{exp.company}</p>
                        {exp.subtitle && (
                          <p className="text-muted text-sm mt-0.5 flex items-center gap-1">
                            <MapPin size={14} className="shrink-0" />
                            {exp.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-accent-light bg-accent/10 border border-accent/25 px-4 py-2 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-muted-dim text-sm md:text-base leading-relaxed"
                      >
                        <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
