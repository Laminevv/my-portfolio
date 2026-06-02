import { Code2, Workflow } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">+</span>
              <Workflow className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground/70" style={{ fontSize: '0.875rem' }}>
              Built with React, Tailwind & Motion
            </p>
          </div>

          <p className="text-foreground/70" style={{ fontSize: '0.875rem' }}>
            © 2026 Full-Stack Developer & Automation Expert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
