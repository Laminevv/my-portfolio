import { ArrowRight, Code2, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import profilePhoto from '@/assets/images/profile-photo.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary opacity-10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative flex justify-center mb-8">
            {/* Outer glow ring — animated */}
            <div className="absolute inset-0 rounded-full bg-teal-400/20 blur-2xl scale-110 animate-pulse" />

            {/* Rotating border ring */}
            <div
              className="absolute inset-[-4px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #2dd4bf, transparent, #2dd4bf, transparent)',
                animation: 'spin 6s linear infinite',
              }}
            />

            {/* Photo container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-teal-400/40 shadow-[0_0_40px_rgba(45,212,191,0.3)] hover:shadow-[0_0_60px_rgba(45,212,191,0.5)] transition-shadow duration-500"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              <img
                src={profilePhoto}
                alt="Mohamed Chibout"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 border border-secondary rounded-xl bg-secondary/10 backdrop-blur-sm">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <div className="h-px w-12 bg-gradient-to-r from-primary to-secondary" />
            <div className="p-3 border border-secondary rounded-xl bg-secondary/10 backdrop-blur-sm">
              <Workflow className="w-6 h-6 text-primary" />
          </div>
          </div>

            <h1 className="mb-6 tracking-tight" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
            Building Scalable Web Apps &<br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Intelligent Workflow Automations
            </span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            Full-stack developer specializing in modern web applications and n8n automation pipelines.
            Transforming complex business processes into elegant, automated solutions.
          </p>

            <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-secondary rounded-lg hover:bg-secondary/10 transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <NetworkDiagram />
        </motion.div>
      </div>
    </section>
  );
}

function NetworkDiagram() {
  return (
    <div className="relative w-full max-w-3xl mx-auto h-64">
      <svg className="w-full h-full" viewBox="0 0 800 250">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.line
          x1="100" y1="125" x2="250" y2="80"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.line
          x1="100" y1="125" x2="250" y2="170"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        <motion.line
          x1="250" y1="80" x2="400" y2="125"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.line
          x1="250" y1="170" x2="400" y2="125"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        <motion.line
          x1="400" y1="125" x2="550" y2="80"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.line
          x1="400" y1="125" x2="550" y2="170"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.line
          x1="550" y1="80" x2="700" y2="125"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.line
          x1="550" y1="170" x2="700" y2="125"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.0 }}
        />

        {[
          { cx: 100, cy: 125 },
          { cx: 250, cy: 80 },
          { cx: 250, cy: 170 },
          { cx: 400, cy: 125 },
          { cx: 550, cy: 80 },
          { cx: 550, cy: 170 },
          { cx: 700, cy: 125 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="6"
            fill="var(--primary)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
}
