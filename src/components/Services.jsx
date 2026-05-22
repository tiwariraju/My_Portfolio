import { motion } from 'framer-motion';
import { Server, Code, Cog, Check } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import GlassCard from './ui/GlassCard';

const services = [
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Building robust and scalable backend systems using Java, Spring Boot, and modern frameworks. Creating efficient APIs and database architectures.',
    features: [
      'RESTful API Development',
      'Database Design & Optimization',
      'Microservices Architecture',
      'Performance Optimization',
    ],
    featured: false,
  },
  {
    icon: Code,
    title: 'Full-Stack Solutions',
    description:
      'End-to-end development services from backend APIs to frontend interfaces. Complete web applications with modern technologies.',
    features: [
      'Full-Stack Web Applications',
      'Real-time Communication Systems',
      'Database Integration',
      'Responsive UI/UX Design',
    ],
    featured: true,
  },
  {
    icon: Cog,
    title: 'System Architecture',
    description:
      'Designing and implementing scalable system architectures that can handle growing user bases and complex business requirements.',
    features: [
      'System Design & Planning',
      'Scalability Solutions',
      'Security Implementation',
      'Code Review & Optimization',
    ],
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          tag="Services"
          title="What I Can Do For You"
          description="I offer comprehensive backend development services to help you build robust and scalable applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard
                className={`text-center h-full ${
                  service.featured
                    ? 'border-accent/50 bg-gradient-to-br from-accent/10 to-accent-light/5'
                    : ''
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-dark">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">{service.title}</h3>
                <p className="text-muted-dim text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="text-left space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-muted text-sm">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
