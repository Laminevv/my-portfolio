import khidmaImg from '../../assets/images/khidma.png';
import mouseAttackImg from '../../assets/images/mouse-attack.png';
import jobnimbusImg from '../../assets/images/jobnimbus.jpg';
import leadQualificationImg from '../../assets/images/lead-qualification.png';
import rosImg from '../../assets/images/ros.png';
import messengerImg from '../../assets/images/massenger.png';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  featured: boolean;
  image: string;
  liveLink: string | null;
  githubLink: string | null;
  brandColor: string;
}

export const projects: Project[] = [
  {
    title: 'Khidma Platform',
    description:
      'A freelance marketplace built for the Maghreb market, connecting local talent with clients through real-time messaging, escrow payments, and AI-powered job matching.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'AI'],
    gradient: 'from-primary to-secondary',
    featured: true,
    image: khidmaImg,
    liveLink: 'https://khidma-five.vercel.app/',
    githubLink: null,
    brandColor: '#059669',
  },
  {
    title: 'Mouse Attack Landing Page & Automation',
    description:
      'A high-converting landing page integrated with advanced n8n backend automation to handle lead routing, event triggers, and real-time data parsing.',
    tags: ['n8n', 'Next.js', 'Node.js', 'Webhooks'],
    gradient: 'from-secondary to-primary',
    featured: true,
    image: mouseAttackImg,
    liveLink: 'https://laminevv.github.io/Attack-Shark-x11-mouse-landing-page/',
    githubLink: null,
    brandColor: '#2563eb',
  },
  {
    title: 'JobNimbus CRM Integration',
    description:
      'Data synchronization workflow between JobNimbus and QuickBooks Online using n8n, eliminating manual accounting overhead.',
    tags: ['n8n', 'CRM', 'QuickBooks', 'API'],
    gradient: 'from-primary/80 to-secondary/80',
    featured: false,
    image: jobnimbusImg,
    liveLink: null,
    githubLink: null,
    brandColor: '#7c3aed',
  },
  {
    title: 'Lead Qualification System',
    description:
      'Advanced n8n backend automation designed to handle lead routing, qualify prospects, and parse real-time data efficiently.',
    tags: ['n8n', 'Webhooks', 'Lead Gen', 'Node.js'],
    gradient: 'from-secondary/80 to-primary/80',
    featured: false,
    image: leadQualificationImg,
    liveLink: null,
    githubLink: null,
    brandColor: '#166534',
  },
  {
    title: 'Restaurant Ordering System',
    description:
      'An intelligent automated workflow managing live food service orders, customer notifications, and inventory updates.',
    tags: ['n8n', 'Database', 'Automation', 'Telegram API'],
    gradient: 'from-primary to-secondary',
    featured: false,
    image: rosImg,
    liveLink: null,
    githubLink: null,
    brandColor: '#b45309',
  },
  {
    title: 'Messenger AI Chatbot',
    description:
      'Intelligent conversational AI bot for Facebook Messenger designed to automate customer support, handle inquiries, and manage orders in real-time.',
    tags: ['n8n', 'Messenger API', 'Chatbot', 'Automation'],
    gradient: 'from-secondary to-primary',
    featured: false,
    image: messengerImg,
    liveLink: null,
    githubLink: null,
    brandColor: '#1e3a5f',
  },
];
