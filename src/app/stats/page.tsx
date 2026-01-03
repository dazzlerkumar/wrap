import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "2025 Stats",
    description: "Detailed breakdown of my contributions, projects, and tech stack in 2025.",
};
import {
    Map,
    Terminal,
    ArrowLeft,
    ChevronRight,
    Github,
    Award,
    Zap
} from "lucide-react";

const projects = [
    {
        title: "Automicle Admin Dashboard",
        tags: ["Next.js 15", "Firebase", "MongoDB", "RSC", "Server Actions"],
        bullets: [
            "Modernized dashboard with Next.js 15",
            "Full Server Actions implementation",
            "Real-time data with Firebase & MongoDB"
        ],
        icon: LayoutDashboard
    },
    {
        title: "Parking Management System",
        tags: ["Turborepo", "Mapbox GL", "Supabase", "PWA"],
        bullets: [
            "Turborepo monorepo architecture",
            "Admin: Mapbox GL polygons + Supabase RLS",
            "Userapp: Next.js PWA + Google Maps + GeoJSON"
        ],
        icon: Map
    },
    {
        title: "SpecterAI",
        tags: ["Bun", "Ollama", "CLI"],
        bullets: [
            "High-performance Bun-based CLI",
            "Local LLM integration via Ollama",
            "Automated Conventional Commits"
        ],
        icon: Terminal
    },
    {
        title: "WidgetLab",
        tags: ["React", "Next.js 16", "Experimental"],
        bullets: [
            "Platform for experimental React widgets",
            "Early adoption of Next.js 16 features",
            "Component isolation and testing"
        ],
        icon: Zap
    },
    {
        title: "Create Techpix App",
        tags: ["Node.js", "Commander", "CLI"],
        bullets: [
            "CLI for scaffolding Techpix-based NextJS apps",
            "Highly opinionated project structure",
            "Scalable feature-based architecture"
        ],
        icon: Terminal
    }
];

const techRadar = {
    "Used Heavily": ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "React Server Components"],
    "Learned Deeply": ["Supabase RLS", "Postgres Functions", "Turborepo", "Server Actions"],
    "Tried / Experimental": ["Bun", "Ollama", "Next.js 16", "LLM-driven DX"],
    "Pain Points": ["Shadcn in Monorepos", "Complex GeoJSON rendering", "Manual DX bottlenecks"]
};

// Help with missing icons
import { LayoutDashboard } from "lucide-react";

export default function StatsPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30">
            {/* Hero Section */}
            <header className="relative border-b border-white/5 bg-white/2 backdrop-blur-3xl px-6 py-20 overflow-hidden h-screen">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />
                <div className="relative max-w-5xl mx-auto">
                    <Link href="/wrap" className="group mb-12 inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Stories
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-2 w-12 bg-indigo-500 rounded-full" />
                        <span className="text-indigo-400 font-semibold tracking-widest uppercase text-sm">2025 Career Wrap</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
                        Deepak Kumar
                        <span className="block text-indigo-500 mt-2">2025 Stats</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
                        AI-driven dev pushing boundaries in fullstack engineering,
                        admin tooling, and modern DX.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-12">
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold">2,706</span>
                            <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold mt-1">Contributions</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold">11</span>
                            <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold mt-1">Major Projects</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-24 space-y-32">

                {/* Projects Section */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <Award className="text-indigo-500" />
                        <h2 className="text-3xl font-bold">Key Projects</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                                        <project.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-neutral-500 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <ul className="space-y-3">
                                    {project.bullets.map((bullet, j) => (
                                        <li key={j} className="flex gap-3 text-neutral-400 text-sm leading-relaxed">
                                            <ChevronRight size={16} className="shrink-0 text-indigo-500/50" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech Radar Section */}
                <section>
                    <div className="flex items-center gap-4 mb-12">
                        <Zap className="text-indigo-500" />
                        <h2 className="text-3xl font-bold">Tech Radar</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(techRadar).map(([category, items], i) => (
                            <div key={i} className="space-y-6">
                                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-neutral-500">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((item, j) => (
                                        <span key={j} className="px-3 py-1.5 rounded-lg bg-indigo-500/5 text-indigo-300 text-sm font-medium border border-indigo-500/10">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Learnings Section */}
                <section className="p-12 rounded-[40px] bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/10">
                    <h2 className="text-3xl font-bold mb-8">2025 Key Learnings</h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="h-6 w-1 bg-indigo-500 rounded-full mt-1" />
                            <div>
                                <h4 className="font-bold text-lg mb-1">Monorepo Strategy</h4>
                                <p className="text-neutral-400">Turborepo is powerful but shadcn/ui management requires a tight strategy to avoid dependency hell across packages.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="h-6 w-1 bg-indigo-500 rounded-full mt-1" />
                            <div>
                                <h4 className="font-bold text-lg mb-1">Database Security (RLS)</h4>
                                <p className="text-neutral-400">Deep diving into Supabase/Postgres RLS changed my approach to backend-less frontend architectures.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="h-6 w-1 bg-indigo-500 rounded-full mt-1" />
                            <div>
                                <h4 className="font-bold text-lg mb-1">Mapping Pipelines</h4>
                                <p className="text-neutral-400">Designing a robust GeoJSON → Mapbox/Google Maps pipeline is as much about data structure as it is about rendering.</p>
                            </div>
                        </li>
                    </ul>
                </section>

            </main>

            <footer className="border-t border-white/5 py-24 px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8">Let&apos;s build 2026 together.</h2>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/dazzlerkumar" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
                            <Github size={20} />
                            GitHub
                        </a>
                        <Link href="/wrap" className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-colors">
                            Restart Wrap
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
