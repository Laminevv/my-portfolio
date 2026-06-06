import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Passionate about building solutions that make a real difference
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <div className="border-l-4 border-teal-400 pl-6">
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              I'm Mohamed Chibout, a self-taught full-stack developer based in Djelfa, Algeria.
              I specialize in building modern web applications and n8n automation pipelines that solve real business problems.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              With hands-on experience shipping production projects — including Khidma, a full freelance marketplace built for the Maghreb market — I focus on writing clean, maintainable code and delivering reliable results.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm available for remote freelance projects worldwide and respond within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
