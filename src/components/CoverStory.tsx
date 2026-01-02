"use client";
import RotatingText from "./RotatingText";
import AnimatedContent from "./AnimatedContent";

export default function CoverStory() {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center text-center px-8">
            <div className="space-y-6">
                <AnimatedContent delay={0.4} distance={30} duration={0.8}>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white/70">
                        I SHIPPED
                    </h1>
                </AnimatedContent>

                <AnimatedContent delay={0.6} distance={20} duration={0.8}>
                    <div className="h-20 flex items-center justify-center">
                        <RotatingText
                            texts={["SYSTEMS", "PLATFORMS", "WORKFLOWS", "DASHBOARDS", "TOOLING"]}
                            mainClassName="text-3xl md:text-5xl font-black px-4 py-2 rounded-lg bg-transparent text-red-500"
                            staggerDuration={0.025}
                            splitBy="characters"
                            rotationInterval={1500}
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: "100%", opacity: 0 }}
                            exit={{ y: "-100%", opacity: 0 }}
                        />
                    </div>
                </AnimatedContent>

                <AnimatedContent delay={0.8} distance={20} duration={0.8}>
                    <p className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase opacity-80">
                        IN 2025
                    </p>
                </AnimatedContent>
            </div>

            <AnimatedContent delay={1.2} distance={10} duration={1}>
                <div className="mt-16 animate-bounce">
                    <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full opacity-50" />
                </div>
            </AnimatedContent>
        </div>
    );
}
