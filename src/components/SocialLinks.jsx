import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/constants';
import TechIcon from './ui/TechIcon';

const BRAND_COLORS = {
  github: '#ffffff',
  linkedin: '#0a66c2',
  leetcode: '#ffa116',
};

export default function SocialLinks({ variant = 'section' }) {
  const isHero = variant === 'hero';
  const isCompact = variant === 'hero';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: isHero ? 0.45 : 0 }}
      className={`w-full ${isHero ? 'mt-2' : ''}`}
    >
      {!isHero && (
        <p className="text-center text-muted text-sm uppercase tracking-widest font-semibold mb-6">
          Connect With Me
        </p>
      )}

      {isHero && (
        <p className="text-muted text-xs uppercase tracking-widest font-semibold mb-3 lg:text-left text-center w-full">
          Connect
        </p>
      )}

      <div
        className={`flex ${
          isHero
            ? 'justify-center lg:justify-start gap-3 flex-wrap'
            : 'justify-center flex-wrap gap-4 md:gap-5'
        }`}
      >
        {SOCIAL_LINKS.map((link, index) => {
          const brandColor = BRAND_COLORS[link.icon];

          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.name} profile`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.08 }}
              whileHover={{ y: -5, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-glow-sm ${
                isCompact
                  ? 'px-4 py-3 min-w-[120px]'
                  : 'flex-col px-5 py-5 w-[140px] sm:w-[150px]'
              }`}
              style={{
                ['--brand']: brandColor,
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 shrink-0"
                style={{
                  width: isCompact ? 40 : 48,
                  height: isCompact ? 40 : 48,
                  background: `${brandColor}18`,
                  boxShadow: `0 0 16px ${brandColor}30`,
                }}
              >
                <TechIcon id={link.icon} size={isCompact ? 22 : 26} />
              </div>

              <div className={isCompact ? 'text-left' : 'text-center'}>
                <span className="block text-sm font-semibold text-gray-100 group-hover:text-accent transition-colors">
                  {link.name}
                </span>
                {!isCompact && (
                  <span className="text-xs text-muted mt-0.5 flex items-center justify-center gap-1">
                    Visit <ExternalLink size={10} />
                  </span>
                )}
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
