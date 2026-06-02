import { Code2, Database, Globe, Layers, Workflow, Zap, Bot, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';

const webDevSkills = [
  { icon: Code2, name: 'React / Next.js', description: 'Modern UI development' },
  { icon: Layers, name: 'Node.js / Python', description: 'Backend services' },
  { icon: Database, name: 'PostgreSQL / MongoDB', description: 'Database architecture' },
  { icon: Globe, name: 'REST / GraphQL', description: 'API design' },
];

const automationSkills = [
  { icon: Workflow, name: 'n8n Workflows', description: 'Custom automation pipelines' },
  { icon: Zap, name: 'Webhooks & APIs', description: 'Integration architecture' },
  { icon: Bot, name: 'AI Automation', description: 'LLM-powered workflows' },
  { icon: GitBranch, name: 'Process Automation', description: 'Business logic orchestration' },
];

export function Expertise() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Core Expertise</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Bridging the gap between robust web applications and intelligent automation systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-secondary rounded-2xl p-8 bg-secondary/10 backdrop-blur-sm hover:border-secondary/30 transition-colors"
          >
              <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl border border-secondary">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Full-Stack Development</h3>
            </div>

            <div className="space-y-4">
              {webDevSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary group-hover:border-secondary/30 transition-colors">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1">{skill.name}</h4>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-secondary rounded-2xl p-8 bg-secondary/10 backdrop-blur-sm hover:border-secondary/30 transition-colors"
          >
              <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl border border-secondary">
                <Workflow className="w-6 h-6 text-primary" />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Workflow Automation & AI</h3>
            </div>

            <div className="space-y-4">
              {automationSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary group-hover:border-secondary/30 transition-colors">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1">{skill.name}</h4>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
