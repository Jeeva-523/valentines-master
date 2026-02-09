"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Heart, Sparkles, Link as LinkIcon } from "lucide-react";

export default function CreateProposal() {
    const [name, setName] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");
    const [copied, setCopied] = useState(false);

    const handleGenerate = () => {
        if (!name.trim()) return;

        // Get the current origin or default to empty if not in browser
        const origin = typeof window !== "undefined" ? window.location.origin : "";
        const link = `${origin}/${encodeURIComponent(name.trim())}`;
        setGeneratedLink(link);
        setCopied(false);
    };

    const handleCopy = () => {
        if (!generatedLink) return;
        navigator.clipboard.writeText(generatedLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden romantic-gradient font-display">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
                />
            </div>

            <main className="relative z-10 w-full max-w-[500px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-white rounded-3xl shadow-2xl p-8 border border-primary/5"
                >
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                            <Heart className="size-8 text-primary fill-primary/20" />
                        </div>
                        <h1 className="text-3xl font-bold text-[#181112] mb-2">
                            Create Your <span className="text-primary">Valentine Link</span>
                        </h1>
                        <p className="text-[#896168]">
                            Enter your partner's name below to generate a special surprise link just for them!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-[#181112] ml-1">
                                Partner's Name
                            </label>
                            <div className="relative">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="e.g. My Love, Sarah, etc."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full h-14 bg-background-light border border-zinc-200 rounded-2xl px-5 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-lg"
                                />
                                <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-primary/30" />
                            </div>
                        </div>

                        <button
                            onClick={handleGenerate}
                            disabled={!name.trim()}
                            className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                            Generate Special Link
                            <Sparkles className="size-5" />
                        </button>

                        <AnimatePresence>
                            {generatedLink && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 border-t border-zinc-100 mt-6 space-y-3">
                                        <p className="text-sm font-semibold text-[#181112]">Your Generated Link:</p>
                                        <div className="flex gap-2">
                                            <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-4 flex items-center overflow-hidden">
                                                <span className="text-xs text-zinc-500 truncate lowercase">
                                                    {generatedLink}
                                                </span>
                                            </div>
                                            <button
                                                onClick={handleCopy}
                                                className="size-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center transition-all hover:bg-zinc-50 active:scale-90"
                                            >
                                                {copied ? (
                                                    <Check className="size-5 text-green-500" />
                                                ) : (
                                                    <Copy className="size-5 text-zinc-600" />
                                                )}
                                            </button>
                                        </div>
                                        <p className="text-[10px] text-center text-zinc-400 uppercase tracking-widest font-medium">
                                            Share this link with your special someone!
                                        </p>

                                        <a
                                            href={generatedLink}
                                            target="_blank"
                                            className="flex items-center justify-center gap-2 w-full py-3 text-sm text-primary font-bold hover:underline"
                                        >
                                            <LinkIcon className="size-4" />
                                            Preview Link
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </main>

            {/* Footer Message */}
            <div className="mt-8 text-primary/40 text-xs font-medium tracking-widest uppercase">
                Made with Love ❤️
            </div>
        </div>
    );
}
