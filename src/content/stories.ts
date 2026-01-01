
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
      "AI-driven dev",
      "2,706 contributions in 2025"
    ],
    tags: ["Next.js", "React", "TypeScript"],
    durationMs: 3500,
    accent: "#6366f1"
  },
  {
    id: "nextjs-leap",
    title: "Next.js 15 leap",
    icon: Rocket,
    bullets: [
      "Upgraded mental model",
      "App Router patterns",
      "Shipping faster"
    ],
    tags: ["Next.js 15", "Performance"],
    durationMs: 6500,
    accent: "#000000"
  },
  {
    id: "server-actions",
    title: "Server Actions + DB",
    icon: Server,
    bullets: [
      "Server Actions for data",
      "MongoDB + Firebase",
      "Admin dashboard"
    ],
    tags: ["Backend", "Data"],
    durationMs: 7000,
    accent: "#10b981"
  },
  {
    id: "rsc",
    title: "React Server Components",
    icon: Layers,
    bullets: [
      "Server-first rendering",
      "Less client JS",
      "All Next apps"
    ],
    tags: ["RSC", "Optimization"],
    durationMs: 6500,
    accent: "#3b82f6"
  },
  {
    id: "turborepo",
    title: "Turborepo monorepo",
    icon: Boxes,
    bullets: [
      "First Turborepo",
      "Deps worked well",
      "Shadcn component management failed (lesson)"
    ],
    tags: ["Monorepo", "DX"],
    durationMs: 8000,
    accent: "#ef4444"
  },
  {
    id: "supabase",
    title: "Supabase/Postgres + RLS",
    icon: Database,
    bullets: [
      "Postgres basics learned",
      "Postgres functions",
      "Row Level Security (RLS)"
    ],
    tags: ["Database", "Security"],
    durationMs: 7500,
    accent: "#3ecf8e"
  },
  {
    id: "mapbox",
    title: "Mapbox GL admin polygons",
    icon: PenTool,
    bullets: [
      "Custom polygons",
      "Parking areas on map",
      "Admin tooling impact"
    ],
    tags: ["Mapping", "Admin Tools"],
    durationMs: 6500,
    accent: "#000000"
  },
  {
    id: "geojson",
    title: "GeoJSON → Google Maps",
    icon: Map,
    bullets: [
      "GeoJSON pipeline",
      "Google Maps rendering",
      "User PWA booking UX"
    ],
    tags: ["PWA", "UX"],
    durationMs: 6500,
    accent: "#4285f4"
  },
  {
    id: "specter-cli",
    title: "SpecterAI CLI with Bun",
    icon: Terminal,
    bullets: [
      "Bun-based CLI",
      "Local LLM via Ollama",
      "Conventional Commits generator"
    ],
    tags: ["CLI", "AI", "Bun"],
    durationMs: 7500,
    accent: "#000000"
  },
  {
    id: "ai-journey",
    title: "AI IDE journey",
    icon: Wand2,
    bullets: [
      "VS Code → Cursor → Trae → Kiro → VS Code + Gemini CLI",
      "Settled on Antigravity IDE",
      "AI-assisted workflow matured"
    ],
    tags: ["AI Tools", "DX"],
    durationMs: 8000,
    accent: "#8b5cf6"
  },
  {
    id: "outro",
    title: "2026 & Beyond",
    icon: ArrowRightCircle,
    bullets: [
      "2026: deeper systems + DX",
      "More OSS + case studies",
      "Open stats →"
    ],
    tags: ["Future", "Goals"],
    durationMs: 4500,
    accent: "#f59e0b"
  }
];
