"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function HamburgerMenu() {
    const { isMenuOpen, setMenuOpen } = useStore();

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-0 bg-[#28236b] z-40 flex flex-col pt-28 px-6 md:px-20 lg:px-28"
                >
                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#3730a3] rounded-full blur-[100px] opacity-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff4400] rounded-full blur-[100px] opacity-10 pointer-events-none" />

                    <div className="flex flex-col space-y-6 max-w-4xl mx-auto w-full">
                        {navigation.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center justify-between text-4xl md:text-6xl font-bold text-white hover:text-[#ff4400] transition-colors group"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                    <ArrowRight className="opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#ff4400] w-8 h-8 md:w-12 md:h-12" />
                                </Link>
                                <div className="h-px bg-white/10 mt-6 w-full" />
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="pt-8"
                        >
                            <Link href="/contact" onClick={() => setMenuOpen(false)}>
                                <button className="w-full md:w-auto bg-[#ff4400] text-[#1e1b4b] py-4 px-12 rounded-full font-bold text-xl hover:bg-white transition-colors duration-300 shadow-lg shadow-[#ff4400]/20">
                                    Start Your Project
                                </button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-auto pb-8 text-center md:text-left text-white/40 text-sm"
                        >
                            © 2025 Cloudstream Systems
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
