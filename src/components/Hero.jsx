import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_BADGES } from '../data/constants';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark via-dark-card to-dark-elevated pt-24 pb-16"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[12%] right-[8%] w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 blur-3xl animate-float" />
        <div className="absolute bottom-[18%] left-[4%] w-36 h-36 md:w-44 md:h-44 rounded-full bg-accent/10 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,191,166,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-semibold text-sm tracking-widest uppercase mb-4"
            >
              Software Developer Portfolio
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-[1.15] mb-4 tracking-tight">
              Hello, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                Raju Tiwari
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl text-muted font-normal mb-5 max-w-xl">
              Passionate Software Developer & Backend Enthusiast
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 max-w-xl">
              {HERO_BADGES.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-accent/10 text-accent-light border border-accent/30"
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            <p className="text-muted-dim text-base md:text-lg leading-relaxed mb-8 max-w-xl text-pretty">
              I&apos;m an MCA student at NIET, Greater Noida, passionate about software development
              and solving real-world problems through code. I love building robust backend systems
              and creating seamless user experiences.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 w-full max-w-xl">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-accent to-accent-light text-dark shadow-glow-sm hover:shadow-glow transition-shadow text-sm sm:text-base"
              >
                Get In Touch
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full font-semibold border-2 border-accent text-gray-100 hover:bg-accent hover:text-dark transition-colors text-sm sm:text-base"
              >
                View My Work
              </motion.a>
            </div>

            <SocialLinks variant="hero" />
          </motion.div>

          {/* Profile image column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-fit pb-10 sm:pb-12">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/25 to-accent-light/10 blur-2xl" />
              <div className="relative rounded-full p-1 bg-gradient-to-br from-accent to-accent-light shadow-glow">
                <img
                  src="/profesional.jpeg"
                  alt="Raju Tiwari"
                  className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover bg-dark-card"
                  onError={(e) => {
                    e.target.src =
                      'https://ui-avatars.com/api/?name=Raju+Tiwari&background=00BFA6&color=0D0D0D&size=512';
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 w-max max-w-[90vw]"
              >
                <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-dark/95 backdrop-blur-xl border-2 border-accent shadow-glow-sm">
                  <Sparkles size={16} className="text-accent-light shrink-0 hidden sm:block" />
                  <span className="text-accent-light text-xs sm:text-sm font-bold whitespace-nowrap">
                    1.5+ Years Experience
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
