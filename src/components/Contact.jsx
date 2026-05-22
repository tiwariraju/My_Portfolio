import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';
import SocialLinks from './SocialLinks';
import { CONTACT_INFO } from '../data/constants';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-card">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          tag="Contact"
          title="Let's Work Together"
          description="Ready to bring your ideas to life? Let's discuss your project and how I can help you achieve your goals."
        />

        <div className="mb-12 pb-8 border-b border-white/10">
          <SocialLinks variant="section" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <div className="space-y-6">
            <ContactItem
              icon={<Linkedin size={24} />}
              title="LinkedIn"
              subtitle="Connect with me professionally"
              href={CONTACT_INFO.linkedin}
              linkText="linkedin.com/in/raju-tiwari-b203b3211"
            />
            <ContactItem
              icon={<Mail size={24} />}
              title="Email"
              subtitle="Send me a message"
              href={`mailto:${CONTACT_INFO.email}`}
              linkText={CONTACT_INFO.email}
            />
            <ContactItem
              icon={<MapPin size={24} />}
              title="Location"
              subtitle="Based in Greater Noida"
              text={CONTACT_INFO.location}
            />
          </div>

          <GlassCard hover={false}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/success.html"
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder:text-muted-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder:text-muted-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder:text-muted-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-100 placeholder:text-muted-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-y"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-full font-semibold bg-gradient-to-r from-accent to-accent-light text-dark shadow-glow-sm"
              >
                Send Message
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, subtitle, href, linkText, text }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex gap-4 items-start"
    >
      <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-dark">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-100 font-semibold text-lg">{title}</h3>
        <p className="text-muted-dim text-sm mb-1">{subtitle}</p>
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="text-accent font-medium hover:text-accent-light transition-colors text-sm break-all"
          >
            {linkText}
          </a>
        ) : (
          <span className="text-accent font-medium text-sm">{text}</span>
        )}
      </div>
    </motion.div>
  );
}
