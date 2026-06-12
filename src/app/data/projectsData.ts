import khidmaImg from '../../assets/images/khidma.png';
import mouseAttackImg from '../../assets/images/mouse-attack.png';
import jobnimbusImg from '../../assets/images/khamsat_n8n_portfolio.png';
import restaurantImg from '../../assets/images/portfolio_restaurant.png';
import chatbotImg from '../../assets/images/portfolio_chatbot.png';
import inventoryImg from '../../assets/images/portfolio_inventory.png';

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
    tags: ['Next.js', 'Supabase', 'Chargily Pay', 'AI'],
    gradient: 'from-primary to-secondary',
    featured: true,
    image: khidmaImg,
    liveLink: 'https://khidma-five.vercel.app/',
    githubLink: null,
    brandColor: '#059669',
  },
  {
    title: 'Mouse Attack Landing Page',
    description:
      'A sleek, high-converting Arabic product landing page for the Attack Shark X11 gaming mouse, featuring detailed specs, pricing, and a streamlined order flow.',
    tags: ['Next.js', 'Landing Page', 'E-commerce', 'UI/UX'],
    gradient: 'from-secondary to-primary',
    featured: true,
    image: mouseAttackImg,
    liveLink: 'https://laminevv.github.io/Attack-Shark-x11-mouse-landing-page/',
    githubLink: null,
    brandColor: '#2563eb',
  },
  {
    title: 'JobNimbus → QuickBooks Sync Workflow',
    description:
      'Automated 3-way sync between JobNimbus CRM and QuickBooks Online — zero manual entry. Customers synced automatically, invoices with duplicate protection, merchant fees handled via clearing, and real-time payment reconciliation with error notifications.',
    tags: ['n8n', 'JobNimbus API', 'QuickBooks API', 'Automation'],
    gradient: 'from-primary/80 to-secondary/80',
    featured: false,
    image: jobnimbusImg,
    liveLink: null,
    githubLink: null,
    brandColor: '#7c3aed',
  },
  {
    title: 'Restaurant Order Management System',
    description:
      'Automates the full order journey — from customer to kitchen to waiter, with daily AI-powered reports. Receives and saves orders instantly, notifies kitchen via Telegram in real-time, tracks order status, and generates automated daily reports with AI analytics.',
    tags: ['n8n', 'Telegram API', 'Database', 'AI Analytics'],
    gradient: 'from-secondary/80 to-primary/80',
    featured: false,
    image: restaurantImg,
    liveLink: null,
    githubLink: null,
    brandColor: '#b45309',
  },
  {
    title: 'AI-Powered Messenger Chatbot',
    description:
      'An intelligent AI Agent that replies naturally, remembers conversations, and pulls data from your spreadsheet. Features conversation memory across sessions, fetches product data from Google Sheets, sends emails automatically via Gmail, and connects directly to Messenger via Facebook API.',
    tags: ['n8n', 'OpenAI', 'Messenger API', 'Google Sheets'],
    gradient: 'from-primary to-secondary',
    featured: false,
    image: chatbotImg,
    liveLink: null,
    githubLink: null,
    brandColor: '#1e3a5f',
  },
  {
    title: 'Inventory & Sales Automation',
    description:
      'Full automation for sales operations, stock tracking, and invoice generation with instant Telegram notifications. Receives orders automatically via Webhook, checks and reduces stock in real-time, auto-generates invoices, and sends email alerts when stock runs low.',
    tags: ['n8n', 'Inventory Management', 'Telegram API', 'Webhooks'],
    gradient: 'from-secondary to-primary',
    featured: false,
    image: inventoryImg,
    liveLink: null,
    githubLink: null,
    brandColor: '#166534',
  },
];
