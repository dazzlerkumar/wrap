
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { stories, type Story } from "@/content/stories";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

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
            startTimeRef.current = null;
            pausedTimeRef.current = 0;
        }
    }, [currentIndex]);

    const animate = useCallback(
        (time: number) => {
            if (isPaused) {
                if (startTimeRef.current !== null) {
                    pausedTimeRef.current = time - startTimeRef.current - (progress / 100) * currentStory.durationMs;
                }
                return;
            }

            if (startTimeRef.current === null) {
                startTimeRef.current = time - (progress / 100) * currentStory.durationMs - pausedTimeRef.current;
            }

            const elapsed = time - startTimeRef.current - pausedTimeRef.current;
            const newProgress = Math.min((elapsed / currentStory.durationMs) * 100, 100);

            setProgress(newProgress);

            if (newProgress >= 100) {
                handleNext();
            } else {
                requestRef.current = requestAnimationFrame(animate);
            }
        },
        [isPaused, currentStory.durationMs, progress, handleNext]
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
                setIsPaused((prev) => !prev);
                setIsManualPause((prev) => !prev);
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
        setIsPaused((prev) => !prev);
        setIsManualPause((prev) => !prev);
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        setIsPaused(true);
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (!isManualPause) setIsPaused(false);
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
                className="relative z-20 flex aspect-[9/16] h-full max-h-[900px] w-full flex-col overflow-hidden bg-black shadow-2xl md:h-[min(90vh,900px)] md:rounded-2xl border border-white/10"
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                {/* Progress Bars */}
                <div className="absolute top-0 left-0 right-0 z-50 flex gap-1 p-3">
                    {stories.map((_, index) => (
                        <div key={index} className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                            <div
                                className={cn(
                                    "h-full bg-white transition-all duration-100 ease-linear",
                                    index < currentIndex ? "w-full" : index === currentIndex ? "" : "w-0"
                                )}
                                style={{
                                    width: index === currentIndex ? `${progress}%` : undefined,
                                    transition: prefersReducedMotion ? "none" : undefined
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Story Content */}
                <div className="relative flex-1 p-8 pt-16 flex flex-col items-center justify-center text-center">
                    <div
                        className="mb-8 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                        style={{ color: currentStory.accent || "#fff" }}
                    >
                        <currentStory.icon size={64} strokeWidth={1.5} />
                    </div>

                    <h2 className="mb-6 text-3xl font-bold tracking-tight">
                        {currentStory.title}
                    </h2>

                    <div className="mb-8 space-y-4">
                        {currentStory.bullets.map((bullet, i) => (
                            <p key={i} className="text-lg text-neutral-300 font-medium">
                                {bullet}
                            </p>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {currentStory.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/70 rounded-full border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {currentIndex === stories.length - 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push("/stats");
                            }}
                            className="mt-12 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform"
                        >
                            Open 2025 Stats
                        </button>
                    )}
                </div>

                {/* Controls Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-40 flex items-center justify-between p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <button
                        onClick={togglePause}
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
