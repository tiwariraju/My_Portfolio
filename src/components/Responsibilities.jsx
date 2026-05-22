import { motion } from 'framer-motion';
import { Users, Network } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';
import { RESPONSIBILITIES } from '../data/responsibilities';

const icons = [Users, Network];

export default function Responsibilities() {
  return (
    <section id="responsibilities" className="section-padding bg-dark-card">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          tag="Leadership"
          title="Positions of Responsibility"
          description="Contributing to campus initiatives, student engagement, and alumni networking at NIET."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {RESPONSIBILITIES.map((item, index) => {
            const Icon = icons[index] || Users;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-100">{item.role}</h3>
                      <p className="text-accent text-sm font-medium">{item.organization}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-muted-dim text-sm leading-relaxed pl-4 relative before:content-['▶'] before:absolute before:left-0 before:text-accent before:text-[10px]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
