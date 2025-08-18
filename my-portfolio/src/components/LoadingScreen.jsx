import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    // Typing effect
    const [text, setText] = useState("");
    const fullText = "Amit’s Portfolio";

    useEffect(() => {
        let index = 0;
        const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            setText(fullText);
            return;
        }
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="fixed inset-0 z-[60] bg-black/95 text-gray-100 flex flex-col items-center justify-center select-none"
            role="status"
            aria-live="polite"
            aria-label="Loading content"
        >
            {/* Glow ring */}
            <div className="relative mb-8">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-2xl" />
                <div className="absolute -inset-10 rounded-full bg-blue-500/10 animate-ping" />
                <div className="relative rounded-full border border-white/10 px-8 py-5 backdrop-blur-sm">
                    <span className="font-mono text-2xl sm:text-3xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {text}
                        <span className="animate-blink ml-1">|</span>
                    </span>
                </div>
            </div>

                    {/* Indeterminate progress bar (Material-inspired, fluid) */}
                    <div className="w-[70%] max-w-[360px] min-w-[200px] h-[6px] bg-white/10 rounded overflow-hidden relative">
                        <div className="absolute inset-y-0 bg-gradient-to-r from-blue-500 via-sky-400 to-purple-500 rounded animate-indeterminate-1 shadow-[0_0_14px_rgba(59,130,246,0.55)]" style={{ left: '-35%', right: '100%' }} />
                        <div className="absolute inset-y-0 bg-gradient-to-r from-purple-500 via-sky-400 to-blue-500 rounded animate-indeterminate-2 opacity-80" style={{ left: '-200%', right: '100%' }} />
                    </div>

            {/* Fallback continue button if something blocks */}
            {onComplete && (
                <button
                    onClick={onComplete}
                    className="mt-6 text-xs text-gray-400 hover:text-gray-200 underline decoration-dotted"
                >
                    Continue
                </button>
            )}
        </div>
    );
};