import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Methodology />
      <Contact />
      <Footer />
    </div>
  );
}
