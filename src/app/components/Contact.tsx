import { Github, Linkedin, Mail, Send, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { supabase } from '../lib/supabase';

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  entry.count++;
  return entry.count > 5;
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    if (!supabase) {
      setStatus('error');
      return;
    }

    if (isRateLimited('client')) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    const { error } = await supabase
      .from('contacts')
      .insert({ name, email, message });

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      formRef.current?.reset();
      setFormData({ name: '', email: '', message: '' });
    }
  }

  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Work Together</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Ready to build something exceptional? Get in touch to discuss your project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (status === 'error') setStatus('idle');
                  }}
                  className="w-full px-4 py-3 bg-zinc-950 border border-muted-foreground/30 rounded-lg focus:outline-none focus:border-primary transition-colors relative z-50"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (status === 'error') setStatus('idle');
                  }}
                  className="w-full px-4 py-3 bg-zinc-950 border border-muted-foreground/30 rounded-lg focus:outline-none focus:border-primary transition-colors relative z-50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (status === 'error') setStatus('idle');
                  }}
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-950 border border-muted-foreground/30 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none relative z-50"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </motion.button>

              {status === 'success' && (
                <p className="text-center text-sm text-emerald-400">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-red-400">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="border border-secondary rounded-2xl p-6 bg-secondary/10 backdrop-blur-sm">
              <h3 className="mb-6" style={{ fontSize: '1.25rem' }}>
                Connect With Me
              </h3>

              <div className="space-y-4">
                  <a
                    href="mailto:lamine.w.dev@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-background border border-secondary group-hover:border-secondary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                        Email
                      </p>
                      <p>lamine.w.dev@gmail.com</p>
                    </div>
                  </a>

                <a
                    href="https://github.com/Laminevv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-background border border-secondary group-hover:border-secondary/30 transition-colors">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                        GitHub
                      </p>
                      <p>@Laminevv</p>
                    </div>
                  </a>

                <a
                    href="https://www.linkedin.com/in/mohamed-chibout-6834ba376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-background border border-secondary group-hover:border-secondary/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                        LinkedIn
                      </p>
                      <p>Mohamed Chibout</p>
                    </div>
                  </a>

                <a
                    href="https://instagram.com/lamine.vv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-background border border-secondary group-hover:border-secondary/30 transition-colors">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                        Instagram
                      </p>
                      <p>@lamine.vv</p>
                    </div>
                  </a>
              </div>
            </div>

            <div className="border border-secondary rounded-2xl p-6 bg-secondary/10 backdrop-blur-sm">
              <p className="text-muted-foreground" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
                Based in <span className="text-foreground">Algeria</span>
                <br />
                Available for remote projects worldwide
                <br />
                Response time: Within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
