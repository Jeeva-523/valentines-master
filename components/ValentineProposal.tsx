"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const FloatingHeart = ({ delay = 0, size = "text-4xl", position = { top: "10%", left: "10%" } }: { delay?: number; size?: string; position?: React.CSSProperties }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0, y: 0 }}
        animate={{
            opacity: [0, 0.2, 0.2, 0],
            scale: [0.5, 1.2, 1.2, 0.5],
            y: [-20, -100],
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className="absolute pointer-events-none text-primary"
        style={position}
    >
        <span className={`material-symbols-outlined ${size}`}>favorite</span>
    </motion.div>
);

const FloatingGlow = ({ delay = 0, position = { top: "50%", left: "50%" } }: { delay?: number; position?: React.CSSProperties }) => (
    <motion.div
        animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className="absolute pointer-events-none w-64 h-64 bg-primary/20 rounded-full blur-[80px]"
        style={position}
    />
);

const FloatingSparkle = ({ delay = 0, position = { top: "50%", left: "50%" } }: { delay?: number; position?: React.CSSProperties }) => (
    <motion.div
        animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className="absolute pointer-events-none text-primary/40 select-none"
        style={position}
    >
        <span className="material-symbols-outlined text-xl">sparkles</span>
    </motion.div>
);

const Signature = () => (
    <div className="mt-10 pt-6 border-t border-primary/10 w-full flex flex-col items-center">
        <p className="text-[#896168] text-xs mb-2 uppercase tracking-[0.4em] font-bold opacity-30">Forever Yours</p>
        <p className="text-primary text-5xl font-['Satisfy'] rotate-[-2deg] drop-shadow-sm">Your Love</p>
    </div>
);

export default function ValentineProposal({ name }: { name?: string }) {
    const [isAccepted, setIsAccepted] = useState(false);
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
    const [noCount, setNoCount] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleYes = () => {
        setIsAccepted(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#ee2b4b", "#ffccd5", "#ffffff"],
        });
    };

    const handleNoHover = () => {
        if (cardRef.current) {
            const cardRect = cardRef.current.getBoundingClientRect();
            // Restrict movement within the card but increase distance
            const range = 150;
            const newX = (Math.random() - 0.5) * range * 2;
            const newY = (Math.random() - 0.5) * range * 2;

            setNoButtonPos({ x: newX, y: newY });
            setNoCount(prev => prev + 1);
        }
    };

    const noPhrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely sure?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
    ];

    const LoveLetterSnippet = () => (
        <>
            In all the world, there is <span className="text-primary font-bold drop-shadow-sm">no heart for me</span> like yours.
            You are my <span className="text-primary font-bold drop-shadow-sm">today</span> and all of my <span className="text-primary font-bold drop-shadow-sm">tomorrows</span>.
            I found my <span className="text-primary font-bold drop-shadow-sm">final destination</span> in your soul.
            I will <span className="text-primary font-bold drop-shadow-sm underline decoration-primary/30">always be yours</span>, no matter what. 👑🔥
        </>
    );

    return (
        <div ref={containerRef} className={`relative flex w-full flex-col items-center p-4 romantic-gradient font-display ${isAccepted ? 'min-h-screen overflow-y-auto' : 'h-screen justify-center overflow-hidden'}`}>
            {/* Floating Decoration Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <FloatingHeart delay={0} size="text-4xl" position={{ top: "10%", left: "10%" }} />
                <FloatingHeart delay={1} size="text-6xl" position={{ bottom: "15%", right: "10%" }} />
                <FloatingHeart delay={2} size="text-3xl" position={{ top: "30%", right: "20%" }} />
                <FloatingHeart delay={0.5} size="text-4xl" position={{ bottom: "10%", left: "15%" }} />

                {/* Random Sparkles */}
                <FloatingSparkle delay={0} position={{ top: "20%", left: "30%" }} />
                <FloatingSparkle delay={1.5} position={{ top: "60%", right: "25%" }} />
                <FloatingSparkle delay={0.8} position={{ bottom: "20%", left: "20%" }} />
                <FloatingSparkle delay={2.2} position={{ top: "15%", right: "40%" }} />

                {/* Romantic Glows & Extra Magic when Accepted */}
                {isAccepted && (
                    <>
                        <FloatingGlow delay={0} position={{ top: "20%", left: "10%" }} />
                        <FloatingGlow delay={2} position={{ bottom: "20%", right: "10%" }} />
                        <FloatingGlow delay={4} position={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

                        {/* More hearts rain effect */}
                        <FloatingHeart delay={0.2} size="text-2xl" position={{ top: "5%", left: "25%" }} />
                        <FloatingHeart delay={1.2} size="text-5xl" position={{ top: "45%", left: "5%" }} />
                        <FloatingHeart delay={2.5} size="text-3xl" position={{ top: "75%", right: "15%" }} />
                        <FloatingHeart delay={3.2} size="text-4xl" position={{ top: "60%", left: "80%" }} />
                        <FloatingHeart delay={1.8} size="text-2xl" position={{ top: "35%", right: "5%" }} />

                        {/* Dense Sparkles when accepted */}
                        <FloatingSparkle delay={0.1} position={{ top: "40%", left: "15%" }} />
                        <FloatingSparkle delay={0.5} position={{ top: "10%", right: "10%" }} />
                        <FloatingSparkle delay={1.1} position={{ bottom: "5%", left: "50%" }} />
                        <FloatingSparkle delay={1.9} position={{ top: "80%", left: "10%" }} />
                    </>
                )}
            </div>

            {/* Navigation */}
            <div className="fixed top-0 w-full max-w-[960px] mx-auto z-10">
                <header className="flex items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-2 text-[#181112]">
                        <div className="size-5 text-primary">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-base font-bold leading-tight tracking-tight">Special Moments</h2>
                    </div>
                    <button className="flex size-8 items-center justify-center rounded-full bg-white shadow-sm text-primary">
                        <span className="material-symbols-outlined text-lg">favorite</span>
                    </button>
                </header>
            </div>

            {/* Main Content Container */}
            <main className="relative z-10 w-full max-w-[500px] flex flex-col items-center gap-4">
                <AnimatePresence mode="wait">
                    {!isAccepted ? (
                        <motion.div
                            key="ask"
                            ref={cardRef}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="w-full @container"
                        >
                            <div className="flex flex-col items-center justify-center rounded-xl bg-white shadow-xl p-6 border border-primary/5">
                                {/* Main Illustration/Gif */}
                                <div className="w-full aspect-square max-w-[200px] mb-4 relative">
                                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl"></div>
                                    <div
                                        className="relative w-full h-full bg-center bg-no-repeat bg-contain"
                                        style={{ backgroundImage: 'url("/assets/il_1588xN.7566311702_kx8d (1).avif")' }}
                                    />
                                </div>

                                {/* Proposal Text */}
                                <div className="text-center mb-6">
                                    <h1 className="text-[#181112] tracking-tight text-3xl md:text-4xl font-bold leading-tight mb-2">
                                        Will you be my <span className="text-primary">Valentine?</span>
                                    </h1>
                                    <p className="text-[#896168] text-base">
                                        I've been thinking of asking you this for a while...
                                    </p>
                                </div>

                                {/* Button Group */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4 relative min-h-[80px]">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleYes}
                                        className="group flex min-w-[180px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-lg font-bold transition-all shadow-md z-20"
                                    >
                                        <span className="truncate">Yes!</span>
                                        <span className="material-symbols-outlined">favorite</span>
                                    </motion.button>

                                    <motion.button
                                        animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                                        onMouseEnter={handleNoHover}
                                        className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-background-light border border-zinc-200 text-[#181112] text-sm font-medium transition-all hover:bg-zinc-100 whitespace-nowrap"
                                    >
                                        <span className="truncate">{noPhrases[Math.min(noCount, noPhrases.length - 1)]}</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="accepted"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full"
                        >
                            {/* Page 1: Yay Message */}
                            <section className="h-screen flex flex-col items-center justify-center text-center gap-6 p-4">
                                <div className="w-full aspect-square max-w-[220px] relative">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                                    <div
                                        className="relative w-full h-full bg-center bg-no-repeat bg-contain"
                                        style={{ backgroundImage: 'url("/assets/il_1588xN.7637972537_n050.avif")' }}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex flex-col items-center">
                                        <motion.h1
                                            animate={{
                                                y: [-3, 3, -3],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="text-5xl md:text-7xl font-black tracking-tighter flex items-center gap-3 drop-shadow-xl"
                                        >
                                            <span className="flex">
                                                {name?.split('').map((char, i) => (
                                                    <motion.span
                                                        key={i}
                                                        animate={{
                                                            color: ['#FF004D', '#7C3AED', '#FF6B6B', '#FF004D']
                                                        }}
                                                        transition={{
                                                            duration: 4,
                                                            repeat: Infinity,
                                                            delay: i * 0.1,
                                                            ease: "linear"
                                                        }}
                                                        className="uppercase"
                                                    >
                                                        {char}
                                                    </motion.span>
                                                ))}
                                            </span>
                                            <span className="text-4xl md:text-6xl">❤️!!</span>
                                        </motion.h1>
                                    </div>
                                    <p className="text-xl md:text-2xl text-[#896168] font-semibold italic">
                                        "Million hearts for others, but mine is only for you..." 👑
                                    </p>
                                </div>

                                {/* Scroll Hint */}
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute bottom-10 flex flex-col items-center gap-2 text-primary/40"
                                >
                                    <p className="text-[10px] uppercase tracking-widest font-bold">Scroll for a surprise</p>
                                    <span className="material-symbols-outlined">expand_more</span>
                                </motion.div>
                            </section>

                            {/* Page 2: Love Letter */}
                            <section className="min-h-screen flex flex-col items-center justify-center p-4 py-20 bg-white/30 backdrop-blur-[2px]">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="w-full max-w-[500px] relative"
                                >
                                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-pink-300/10 rounded-[40px] blur-xl"></div>
                                    <div className="relative bg-white/90 backdrop-blur-xl p-10 md:p-14 rounded-[40px] border border-primary/5 shadow-2xl">
                                        <span className="material-symbols-outlined text-primary/10 absolute top-6 left-6 text-6xl select-none">format_quote</span>
                                        <div className="relative z-10 flex flex-col items-center">
                                            <h3 className="text-primary font-bold mb-8 tracking-[0.3em] uppercase text-[10px] opacity-60">A Private Note for you</h3>
                                            <p className="text-[#896168] text-2xl md:text-3xl leading-[1.8] font-medium italic text-center font-['Dancing_Script'] px-2">
                                                <LoveLetterSnippet />
                                            </p>

                                            <Signature />
                                        </div>
                                        <span className="material-symbols-outlined text-primary/10 absolute bottom-6 right-6 text-6xl transform rotate-180 select-none">format_quote</span>
                                    </div>

                                    <div className="mt-12 flex justify-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="size-16 bg-primary/10 rounded-full flex items-center justify-center"
                                        >
                                            <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </section>
                        </motion.div>
                    )}
                </AnimatePresence>


            </main>



            {/* Decorative Card (Stacked behind effect) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[480px] bg-primary/5 rounded-xl -rotate-2 -z-10 hidden lg:block"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[480px] bg-primary/5 rounded-xl rotate-2 -z-10 hidden lg:block"></div>
        </div>
    );
}
