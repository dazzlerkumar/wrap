
import { 
  Sparkles, 
  Rocket, 
  Server, 
  Layers, 
  Boxes, 
  Database, 
  PenTool, 
  Map, 
  Terminal, 
  Wand2, 
  ArrowRightCircle,
  type LucideIcon
} from "lucide-react";

export type Story = {
  id: string;
  title: string;
  icon: LucideIcon;
  bullets: string[];
  tags: string[];
  durationMs: number;
  accent?: string;
};

export const stories: Story[] = [
  {
    id: "cover",
    title: "2025 Career Wrap",
    icon: Sparkles,
    bullets: [
      "Deepak Kumar",
      "Building the future, one commit at a time",
      "2,706 contributions in 2025"
    ],
    tags: ["Next.js", "React", "TypeScript"],
    durationMs: 3500,
    accent: "#6366f1"
  },
  {
    id: "nextjs-leap",
    title: "The Next.js 15 Leap",
    icon: Rocket,
    bullets: [
      "Mastering the latest App Router patterns",
      "A new mental model for performance",
      "Shipping with unprecedented speed"
    ],
    tags: ["Next.js 15", "Performance"],
    durationMs: 6500,
    accent: "#000000"
  },
  {
    id: "server-actions",
    title: "Server Actions & Data Flow",
    icon: Server,
    bullets: [
      "Seamlessly connecting UI and logic",
      "MongoDB and Firebase integration",
      "Building robust admin experiences"
    ],
    tags: ["Backend", "Architecture"],
    durationMs: 7000,
    accent: "#10b981"
  },
  {
    id: "rsc",
    title: "Server-First Rendering",
    icon: Layers,
    bullets: [
      "Embracing React Server Components",
      "Drastically reducing client-side JS",
      "Leaner, faster, better Next apps"
    ],
    tags: ["RSC", "Optimization"],
    durationMs: 6500,
    accent: "#3b82f6"
  },
  {
    id: "turborepo",
    title: "The Monorepo Masterclass",
    icon: Boxes,
    bullets: [
      "Scaling with Turborepo architecture",
      "Managing complex dependencies",
      "Lessons learned in shared components"
    ],
    tags: ["Monorepo", "DX"],
    durationMs: 8000,
    accent: "#ef4444"
  },
  {
    id: "supabase",
    title: "The Database Fortress",
    icon: Database,
    bullets: [
      "Direct Postgres power with Supabase",
      "Row Level Security (RLS) deep dive",
      "Secure by design, fast by default"
    ],
    tags: ["Database", "Security"],
    durationMs: 7500,
    accent: "#3ecf8e"
  },
  {
    id: "mapbox",
    title: "Mapping Complexity",
    icon: PenTool,
    bullets: [
      "Custom polygons and geospatial data",
      "Precision parking area management",
      "High-impact admin tooling"
    ],
    tags: ["Mapping", "Admin Tools"],
    durationMs: 6500,
    accent: "#000000"
  },
  {
    id: "geojson",
    title: "The GeoJSON Pipeline",
    icon: Map,
    bullets: [
      "Transforming data into navigation",
      "Optimized Google Maps rendering",
      "A fluid PWA booking experience"
    ],
    tags: ["PWA", "UX"],
    durationMs: 6500,
    accent: "#4285f4"
  },
  {
    id: "specter-cli",
    title: "The AI Terminal",
    icon: Terminal,
    bullets: [
      "Bun-powered CLI performance",
      "Local LLM magic with Ollama",
      "Automated commits and DX tools"
    ],
    tags: ["CLI", "AI", "Bun"],
    durationMs: 7500,
    accent: "#000000"
  },
  {
    id: "ai-journey",
    title: "The AI IDE Evolution",
    icon: Wand2,
    bullets: [
      "From VS Code to Cursor and Trae",
      "Finding the ultimate flow with Antigravity",
      "AI-assisted coding at its peak"
    ],
    tags: ["AI Tools", "DX"],
    durationMs: 8000,
    accent: "#8b5cf6"
  },
  {
    id: "outro",
    title: "Defining 2026",
    icon: ArrowRightCircle,
    bullets: [
      "Deeper systems, better developer DX",
      "Open source and more case studies",
      "The journey continues in the stats →"
    ],
    tags: ["Future", "Goals"],
    durationMs: 4500,
    accent: "#f59e0b"
  }
];
