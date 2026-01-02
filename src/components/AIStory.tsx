"use client";
import RotatingText from "./RotatingText";
import AnimatedContent from "./AnimatedContent";

export default function AIStory() {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center text-center px-8">
            <div className="space-y-4 md:space-y-6">
                <AnimatedContent delay={0.4} distance={30} duration={0.8}>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white/70 leading-none">
                        THIS YEAR I GOT <br /> A COMPANION
                    </h2>
                </AnimatedContent>
                <AnimatedContent delay={0.6} distance={20} duration={0.8}>
                    <div className="h-20 flex items-center justify-center">
                        <h1 className="text-5xl md:text-7xl font-black px-4 py-2 rounded-lg bg-transparent text-red-500 italic">AI</h1>
                    </div>
                </AnimatedContent>
                <AnimatedContent delay={0.8} distance={20} duration={0.8}>
                    <p className="text-xl md:text-3xl font-black text-white tracking-[0.2em] uppercase opacity-80">
                        FOR THE DAILY GRIND
                    </p>
                </AnimatedContent>
                <AnimatedContent delay={2.2} distance={20} duration={0.8}>
                    <div className="mt-12 flex flex-col items-center space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-black">AI IDE JOURNEY</span>
                        <div className="h-12 flex items-center justify-center bg-white/[0.03] px-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                            <RotatingText
                                texts={["Cursor", "Windsurf", "Trae", "Kiro", "VS Code + Gemini CLI", "Antigravity"]}
                                mainClassName="text-lg md:text-xl font-bold text-indigo-400 items-center justify-center"
                                staggerDuration={0.025}
                                splitBy="words"
                                rotationInterval={1800}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                animate={{ x: 0, opacity: 1 }}
                                initial={{ x: 20, opacity: 0 }}
                                exit={{ x: -20, opacity: 0 }}
                                loop={true}
                            />
                        </div>
                    </div>
                </AnimatedContent>
                <AnimatedContent delay={3.0} distance={10} duration={1}>
                    <div className="space-y-2 pt-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">
                            Tried them all. Settled on
                        </p>
                        <p className="text-xs uppercase tracking-[0.3em] text-white font-black">Antigravity</p>
                    </div>
                </AnimatedContent>
            </div>
        </div>
    );
}
