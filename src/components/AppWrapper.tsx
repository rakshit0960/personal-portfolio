import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./contexts/theme-provider";

interface Prop {
    children: React.JSX.Element | React.JSX.Element[] | string
}

export default function AppWrapper({ children }: Prop) {
    const [isLoaded, setIsLoaded] = useState(false);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        // Small delay to ensure smooth animation on initial load
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative dark:bg-[#0A0A0F] dark:text-white font-mono-code min-h-screen">
            {/* Background gradient accents */}
            <div className="fixed top-0 left-0 w-64 h-64 bg-green-100/20 dark:bg-emerald-600/5 rounded-full blur-3xl -z-10"></div>
            <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-100/10 dark:bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>

            {/* Additional dark mode gradient */}
            {isDark && (
                <>
                    <div className="fixed top-1/4 right-1/4 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl -z-10"></div>
                    <div className="fixed bottom-1/3 left-1/3 w-72 h-72 bg-purple-600/3 rounded-full blur-3xl -z-10"></div>
                </>
            )}

            {/* Subtle grid pattern */}
            <div className="fixed inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.04] -z-10"></div>

            {/* Subtle noise texture for dark mode */}
            {isDark && (
                <div className="fixed inset-0 bg-noise-pattern opacity-[0.12] mix-blend-soft-light -z-5"></div>
            )}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
            >
                <div className="lg:hidden">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {children}
                    </motion.div>
                </div>

                <div className="hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <SectionWrapper name="App">
                            {children}
                        </SectionWrapper>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating dots decoration - enhanced for dark mode */}
            <motion.div
                className="fixed top-24 right-24 w-2 h-2 rounded-full bg-green-500/50 dark:bg-emerald-400/40 -z-5 hidden lg:block"
                animate={{
                    y: [0, -15, 0],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="fixed bottom-36 left-12 w-1.5 h-1.5 rounded-full bg-blue-500/40 dark:bg-blue-400/30 -z-5 hidden lg:block"
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Additional floating elements in dark mode */}
            {isDark && (
                <>
                    <motion.div
                        className="fixed top-1/3 left-1/4 w-1 h-1 rounded-full bg-purple-400/30 -z-5 hidden lg:block"
                        animate={{
                            y: [0, -8, 0],
                            x: [0, 5, 0],
                            opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 7,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />
                    <motion.div
                        className="fixed bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-teal-400/30 -z-5 hidden lg:block"
                        animate={{
                            y: [0, 8, 0],
                            x: [0, -5, 0],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 8,
                            ease: "easeInOut",
                            delay: 1.5
                        }}
                    />
                </>
            )}
        </div>
    )
}
