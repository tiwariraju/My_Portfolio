import SectionHeader from './ui/SectionHeader';
import ProjectCard from './ui/ProjectCard';
import { FEATURED_PROJECTS } from '../data/projects';

export default function FeaturedProjects() {
  return (
    <section id="featured" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,191,166,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          tag="Featured"
          title="Highlighted Work"
          description="Production-ready full-stack projects demonstrating API design, real-time systems, and modern development practices."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              demo={project.demo}
              icon={project.icon}
              variant="featured"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
