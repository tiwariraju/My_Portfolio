import { Heart } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../data/constants';
import TechIcon from './ui/TechIcon';

const BRAND = { github: '#fff', linkedin: '#0a66c2', leetcode: '#ffa116' };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-gray-100 font-semibold text-lg mb-1">Raju Tiwari</p>
            <p className="text-muted-dim text-sm flex items-center justify-center md:justify-start gap-1">
              Built with <Heart size={14} className="text-accent fill-accent" /> for recruiters & collaborators
            </p>
            <p className="text-muted text-sm mt-2">&copy; {year} Raju Tiwari. All rights reserved.</p>
          </div>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center hover:border-accent/50 hover:shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: `${BRAND[link.icon]}12` }}
              >
                <TechIcon id={link.icon} size={20} />
              </a>
            ))}
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
