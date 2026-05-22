import { motion } from 'framer-motion';
import { Code2, Cloud, Award, GraduationCap } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { ACHIEVEMENTS } from '../data/achievements';

const iconMap = {
  code: Code2,
  cloud: Cloud,
  award: Award,
  graduation: GraduationCap,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-dark">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          tag="Achievements"
          title="Milestones & Recognition"
          description="Academic excellence, competitive achievements, and consistent problem-solving growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center hover:border-accent/60 hover:shadow-glow-sm transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-gray-100 font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-dim text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
