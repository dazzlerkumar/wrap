
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Play, Pause } from "lucide-react";
import { stories } from "@/content/stories";
import { cn } from "@/lib/utils";
import AnimatedContent from "./AnimatedContent";
import CoverStory from "./CoverStory";
import AIStory from "./AIStory";

export default function StoryPlayer() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isManualPause, setIsManualPause] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const router = useRouter();

    const requestRef = useRef<number>(null);
    const startTimeRef = useRef<number>(null);
    const pausedTimeRef = useRef<number>(0);
    const progressRef = useRef<number>(0);

    const currentStory = stories[currentIndex];

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        if (mediaQuery.matches) {
            setIsPaused(true);
            setIsManualPause(true);
        }
    }, []);

    const handleNext = useCallback(() => {
        if (currentIndex < stories.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            setProgress(0);
            progressRef.current = 0;
            startTimeRef.current = null;
            pausedTimeRef.current = 0;
        } else {
            router.push("/stats");
        }
    }, [currentIndex, router]);

    const handlePrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            setProgress(0);
            progressRef.current = 0;
            startTimeRef.current = null;
            pausedTimeRef.current = 0;
        }
    }, [currentIndex]);

    const animate = useCallback(
        (time: number) => {
            if (isPaused) {
                if (startTimeRef.current !== null) {
                    pausedTimeRef.current = time - startTimeRef.current - (progressRef.current / 100) * currentStory.durationMs;
                }
                return;
            }

            if (startTimeRef.current === null) {
                startTimeRef.current = time - (progressRef.current / 100) * currentStory.durationMs - pausedTimeRef.current;
            }

            const elapsed = time - startTimeRef.current - pausedTimeRef.current;
            const newProgress = Math.min((elapsed / currentStory.durationMs) * 100, 100);

            setProgress(newProgress);
            progressRef.current = newProgress;

            if (newProgress >= 100) {
                handleNext();
            } else {
                requestRef.current = requestAnimationFrame(animate);
            }
        },
        [isPaused, currentStory.durationMs, handleNext]
    );

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [animate]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setIsPaused(true);
            } else if (!isManualPause) {
                setIsPaused(false);
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === " ") {
                e.preventDefault();
                togglePause();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleNext, handlePrev, isManualPause]);

    const togglePause = () => {
        setIsManualPause((prev) => {
            const next = !prev;
            setIsPaused(next);
            return next;
        });
    };

    const handlePointerDown = () => {
        setIsPaused(true);
    };

    const handlePointerUp = () => {
        if (!isManualPause) setIsPaused(false);
    };

    const handleControlClick = (e: React.MouseEvent | React.PointerEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-950 font-sans text-white">
            {/* Blurred Background */}
            <div
                className="absolute inset-0 z-0 scale-110 blur-3xl saturate-150 opacity-40 transition-colors duration-1000"
                style={{ backgroundColor: currentStory.accent || "#000" }}
            />

            {/* Grain Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] animate-pulse bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

            {/* Main Story Frame */}
            <div
                className="relative z-20 flex aspect-[9/16] w-full flex-col overflow-hidden bg-black shadow-2xl md:w-[400px] h-screen md:h-[min(95vh,900px)] md:rounded-2xl border border-2 border-white/10"
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >

                <div className="cyber-pattern absolute w-full h-full"></div>

                {/* Progress Bars */}
                <div className="absolute top-0 left-0 right-0 z-50 flex gap-1.5 p-4">
                    {stories.map((_, index) => {
                        const isCompleted = index < currentIndex;
                        const isActive = index === currentIndex;

                        return (
                            <div key={index} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/15 backdrop-blur-md relative">
                                <div
                                    className={cn(
                                        "h-full bg-white rounded-full transition-all",
                                        isCompleted ? "duration-500 ease-out opacity-40" : "duration-0 opacity-100"
                                    )}
                                    style={{
                                        width: isCompleted ? "100%" : isActive ? `${progress}%` : "0%",
                                        boxShadow: isActive ? "0 0 15px rgba(255, 255, 255, 0.6)" : "none",
                                        transition: (isActive || prefersReducedMotion) ? "none" : undefined
                                    }}
                                >
                                    {isActive && (
                                        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-white blur-[2px] animate-pulse" />
                                    )}
                                    {isCompleted && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Story Content */}
                <div className="relative flex-1 flex flex-col items-center justify-center">
                    {currentStory.id === "cover" ? (
                        <CoverStory />
                    ) : currentStory.id === "ai-story-copy" ? (
                        <AIStory />
                    ) : (
                        <div className="p-8 pt-16 flex flex-col items-center justify-center text-center">
                            <AnimatedContent key={`${currentIndex}-icon`} delay={0.2} distance={40} duration={1}>
                                <div
                                    className="mb-8 p-6 rounded-3xl glass-bg relative shadow-2xl"
                                    style={{ color: currentStory.accent || "#fff" }}
                                >
                                    <currentStory.icon size={64} strokeWidth={1.5} className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                                </div>
                            </AnimatedContent>

                            <AnimatedContent key={`${currentIndex}-title`} delay={1.4} distance={30} duration={0.8}>
                                <h2 className="mb-6 text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                    {currentStory.title}
                                </h2>
                            </AnimatedContent>

                            <div className="mb-8 space-y-4 w-full">
                                {currentStory.bullets.map((bullet, i) => (
                                    <AnimatedContent
                                        key={`${currentIndex}-bullet-${i}`}
                                        delay={2.4 + i * 0.8}
                                        distance={20}
                                        duration={0.6}
                                    >
                                        <p className="text-lg text-neutral-300 font-medium leading-relaxed">
                                            {bullet}
                                        </p>
                                    </AnimatedContent>
                                ))}
                            </div>

                            <AnimatedContent
                                key={`${currentIndex}-tags`}
                                delay={2.4 + currentStory.bullets.length * 0.8 + 0.4}
                                distance={10}
                                duration={0.6}
                            >
                                <div className="flex flex-wrap justify-center gap-2">
                                    {currentStory.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/5 text-white/50 rounded-full border border-white/10 backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </AnimatedContent>

                            {currentIndex === stories.length - 1 && (
                                <AnimatedContent
                                    key={`${currentIndex}-cta`}
                                    delay={1.2}
                                    distance={20}
                                    duration={0.8}
                                >
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            router.push("/stats");
                                        }}
                                        className="mt-12 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                    >
                                        Open 2025 Stats
                                    </button>
                                </AnimatedContent>
                            )}
                        </div>
                    )}
                </div>

                {/* Controls Overlay */}
                <div
                    className="absolute inset-x-0 bottom-0 z-40 flex items-center justify-between p-6 bg-gradient-to-t from-black/60 to-transparent"
                    onPointerDown={handleControlClick}
                    onPointerUp={handleControlClick}
                    onClick={handleControlClick}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            togglePause();
                        }}
                        className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
                    >
                        {isPaused ? <Play size={24} fill="white" /> : <Pause size={24} fill="white" />}
                    </button>
                </div>

                {/* Left/Right Tap Zones */}
                <div className="absolute inset-0 z-30 flex">
                    <div
                        className="h-full w-1/3 cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                        }}
                    />
                    <div className="h-full w-1/3" />
                    <div
                        className="h-full w-1/3 cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
