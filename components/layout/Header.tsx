"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#1e1b4b]/80 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto pl-4 pr-4 md:pr-20 lg:pr-28 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity z-50 relative">
          <Image
            src="/logo.png"
            alt="Cloudstream Systems"
            width={262}
            height={88}
            className="h-12 md:h-16 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-[#00fa80] transition-colors font-medium text-base relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00fa80] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-[#00fa80] text-[#1e1b4b] px-6 py-2 rounded-full font-bold hover:bg-white transition-colors duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={mobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#1e1b4b] z-40 md:hidden flex flex-col pt-28 px-6"
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3730a3] rounded-full blur-[100px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00fa80] rounded-full blur-[100px] opacity-10 pointer-events-none" />

            <div className="flex flex-col space-y-6">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-3xl font-bold text-white hover:text-[#00fa80] transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00fa80]" />
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
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-[#00fa80] text-[#1e1b4b] py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors duration-300 shadow-lg shadow-[#00fa80]/20">
                    Start Your Project
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pb-8 text-center text-white/40 text-sm"
              >
                © 2025 Cloudstream Systems
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
