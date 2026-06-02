import { useState, useRef } from 'react';
import { ExternalLink, Github, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/projectsData';
import type { Project } from '../data/projectsData';

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (image: string) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border border-secondary rounded-2xl overflow-hidden bg-secondary/10 backdrop-blur-sm hover:border-secondary/30 transition-all duration-300"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${project.brandColor}66 0%, transparent 40%)`,
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none z-0"
        style={{
          background: `linear-gradient(to top, ${project.brandColor}18 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        <div
          className="relative h-52 overflow-hidden cursor-pointer"
          onClick={() => onImageClick(project.image)}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`} />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="flex-1" style={{ fontSize: '1.5rem' }}>
              {project.title}
            </h3>
            <div className="flex items-center gap-2 shrink-0 ml-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-secondary hover:bg-secondary/10 hover:border-secondary/30 transition-colors"
                >
                  <Github className="w-4 h-4 text-primary" />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-secondary hover:bg-secondary/10 hover:border-secondary/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-primary" />
                </a>
              )}
            </div>
          </div>

          <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />

          <p className="text-muted-foreground mb-4" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary/10 border border-secondary rounded-full text-muted-foreground"
                style={{ fontSize: '0.875rem' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40"
            >
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section id="projects" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Real-world solutions combining modern web development with intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={selectedImage}
              alt="Project preview"
              className="max-w-[90vw] max-h-[85vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
