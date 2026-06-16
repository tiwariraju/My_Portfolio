import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Clock, Target } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-card">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          tag="About Me"
          title="Designing Solutions, Not Just Code"
          description="Hi 👋 I'm Raju Tiwari, an MCA student at NIET, Greater Noida, passionate about software development and solving real-world problems through code."
        />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <GlassCard className="!p-6 md:!p-8">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                  <Target size={20} />
                </div>
                <h3 className="text-accent text-lg font-semibold pt-1.5">Who I Am</h3>
              </div>
              <p className="text-muted-dim text-base leading-relaxed max-w-prose text-pretty mb-4">
                I am a Java Full Stack Developer focused on building reliable backend systems and
                clean user-facing experiences. I enjoy translating business requirements into
                scalable technical solutions.
              </p>
              <p className="text-muted-dim text-base leading-relaxed max-w-prose text-pretty">
                Currently pursuing my MCA at NIET, I combine academic learning with hands-on project
                and internship experience across Spring Boot, React, REST APIs, and real-time
                applications.
              </p>
            </GlassCard>

            <GlassCard className="!p-6 md:!p-8">
              <h3 className="text-accent text-lg font-semibold mb-6 flex items-center gap-2">
                <GraduationCap size={22} />
                Educational Background
              </h3>
              <div className="space-y-6">
                <EducationItem
                  icon={<GraduationCap size={20} />}
                  title="MCA - Master of Computer Applications"
                  place="Noida Institute of Engineering and Technology, Greater Noida"
                  year="2024 – 2026"
                />
                <EducationItem
                  icon={<Award size={20} />}
                  title="BCA - Bachelor of Computer Applications"
                  place="Magadh University, Bodh Gaya, Bihar"
                  year="2019 – 2022"
                />
              </div>
            </GlassCard>
          </div>

          <div className="flex flex-col gap-5 sm:gap-6">
            <StatCard icon={<Code size={26} />} value="5+ Projects" label="Completed Projects" />
            <StatCard icon={<Clock size={26} />} value="1.5+ Years" label="Development Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationItem({ icon, title, place, year }) {
  return (
    <div className="flex gap-4 pb-6 border-b border-white/10 last:border-0 last:pb-0">
      <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-dark">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-gray-100 font-semibold leading-snug">{title}</h4>
        <p className="text-muted text-sm mt-1.5 leading-relaxed">{place}</p>
        <span className="inline-block text-accent text-sm font-semibold mt-2">{year}</span>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/[0.02] border border-white/10 rounded-2xl p-7 md:p-8 text-center backdrop-blur-md hover:border-accent/50 hover:shadow-glow-sm transition-all duration-300"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-dark">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-100 mb-1">{value}</h3>
      <p className="text-muted text-sm">{label}</p>
    </motion.div>
  );
}
