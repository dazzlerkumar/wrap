import type { Metadata } from "next";
import StoryPlayer from "@/components/StoryPlayer";

export const metadata: Metadata = {
    title: "2025 Career Wrap",
    description: "Watch the highlights of my 2025 engineering journey.",
};

export default function WrapPage() {
    return (
        <main className="min-h-screen bg-black">
            <StoryPlayer />
        </main>
    );
}
