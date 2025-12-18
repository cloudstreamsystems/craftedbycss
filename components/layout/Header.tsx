"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useStore } from "@/store/useStore";
import HamburgerMenu from "@/components/HamburgerMenu";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const { headerMode, setHeaderMode, isMenuOpen, toggleMenu } = useStore();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Smart Scroll Logic: Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !isMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Simple mode switching based on scroll position for now
    // This can be enhanced with IntersectionObservers for specific sections later
    if (latest > 50) {
      if (headerMode === 'chaos') {
        setHeaderMode('drift'); // Default to light mode (white background) when scrolled
      }
    } else {
      setHeaderMode('chaos'); // Back to transparent at top
    }
  });

  // Determine styles based on mode
  const getHeaderStyles = () => {
    const baseStyles = "fixed z-50 transition-all duration-500 ease-in-out";

    switch (headerMode) {
      case 'drift': // White Glass (Pill Shape)
        return `${baseStyles} top-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-5xl bg-white/90 backdrop-blur-md shadow-lg rounded-full text-[#1e1b4b] border border-white/20`;
      case 'warning': // Dark Glass (Pill Shape)
      case 'order':
        return `${baseStyles} top-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-5xl bg-[#1e1b4b]/90 backdrop-blur-md shadow-lg rounded-full text-white border border-white/10`;
      case 'chaos': // Transparent (Full Width)
      default:
        return `${baseStyles} top-0 w-full bg-transparent text-white`;
    }
  };

  const styles = getHeaderStyles();
  const isDarkText = headerMode === 'drift';

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={styles}
      >
        <nav className="container mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity z-50 relative">
            <Image
              src="/logo.png"
              alt="Cloudstream Systems"
              width={262}
              height={88}
              className={`h-10 md:h-12 w-auto transition-all duration-500 ${isDarkText ? 'brightness-0' : 'brightness-0 invert'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium text-sm tracking-wide hover:text-[#ff4500] transition-colors relative group ${isDarkText ? 'text-[#1e1b4b]' : 'text-white/90'}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4500] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-[#ff4500] text-[#1e1b4b] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:text-[#ff4500] transition-all duration-300 shadow-lg shadow-[#ff4500]/20">
                Get Started
              </button>
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile & Tablet) */}
          <button
            className={`md:hidden z-50 relative p-2 focus:outline-none ${isMenuOpen ? 'text-white' : (isDarkText ? 'text-[#1e1b4b]' : 'text-white')}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </nav>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <HamburgerMenu />
    </>
  );
}
