
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
    durationMs: 7500,
    accent: "#6366f1"
  },
  {
    id: "ai-story-copy",
    title: "The AI Co-pilot",
    icon: Wand2,
    bullets: [
      "THIS YEAR I GOT A CO‑PILOT",
      "From autocomplete to agentic workflows",
      "Settled on Antigravity"
    ],
    tags: ["AI", "DX", "Antigravity"],
    durationMs: 10500,
    accent: "#ef4444"
  },
  {
    id: "nextjs-leap",
    title: "Next.js 15 Upgrade",
    icon: Rocket,
    bullets: [
      "Upgrading to Next.js 15",
      "App Router patterns, done right",
      "Faster builds. Cleaner routes."
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
      "Server Actions: DATA → UI, no extra API",
      "RSC talking to MongoDB + Firebase directly",
      "Building robust admin experiences"
    ],
    tags: ["Backend", "Architecture"],
    durationMs: 8000,
    accent: "#10b981"
  },
  {
    id: "rsc",
    title: "Server-First Rendering",
    icon: Layers,
    bullets: [
      "RSC everywhere it made sense",
      "Less client JS, more server work",
      "Leaner, faster, better Next apps"
    ],
    tags: ["RSC", "Optimization"],
    durationMs: 6500,
    accent: "#3b82f6"
  },
  {
    id: "turborepo",
    title: "Monorepo: First Battle",
    icon: Boxes,
    bullets: [
      "Scaling with Turborepo architecture",
      "Managing complex dependencies",
      "Lessons learned with shadcn shared components"
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
      "Supabase taught me real Postgres",
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
    durationMs: 8000,
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
      "Built a Bun-powered CLI",
      "Local LLM magic with Ollama",
      "Automated commits and DX tools"
    ],
    tags: ["CLI", "AI", "Bun"],
    durationMs: 7500,
    accent: "#000000"
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
    durationMs: 6000,
    accent: "#f59e0b"
  }
];
