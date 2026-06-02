import { motion } from 'motion/react';
import { Search, Lightbulb, Code, Link2, Activity, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'Deep dive into business requirements, existing workflows, and pain points to identify automation opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Architecture Design',
    description: 'Design scalable system architecture, API structure, and automation workflow blueprints.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Build robust web applications with clean code, comprehensive testing, and documentation.',
  },
  {
    icon: Link2,
    title: 'Integration & Automation',
    description: 'Implement n8n workflows, connect APIs, and create intelligent automation pipelines.',
  },
  {
    icon: Activity,
    title: 'Monitoring & Optimization',
    description: 'Set up real-time monitoring, error tracking, and continuous performance optimization.',
  },
  {
    icon: CheckCircle,
    title: 'Deployment & Support',
    description: 'Deploy to production with CI/CD, provide documentation, and offer ongoing maintenance.',
  },
];

export function Methodology() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How I Work</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            A proven methodology for delivering integrated web applications and automation solutions
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                  <div
                    className={`inline-block border border-secondary rounded-2xl p-6 bg-secondary/10 backdrop-blur-sm hover:border-secondary/30 transition-colors ${
                      i % 2 === 0 ? 'mr-0' : 'ml-0'
                    }`}
                  >
                    <h3 className="mb-3" style={{ fontSize: '1.25rem' }}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 md:hidden">
                  <div className="border border-secondary rounded-2xl p-6 bg-secondary/10 backdrop-blur-sm">
                    <h3 className="mb-3" style={{ fontSize: '1.25rem' }}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
