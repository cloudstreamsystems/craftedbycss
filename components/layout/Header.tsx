"use client";

import { useState, useEffect } from "react";
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
  const { isMenuOpen, toggleMenu, headerMode } = useStore();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll state
  // Handle scroll state
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolledDown = latest > 50;
    if (isScrolled !== isScrolledDown) {
      setIsScrolled(isScrolledDown);
    }
  });

  // Initialize scroll state on mount
  useEffect(() => {
    const currentScroll = scrollY.get();
    if (currentScroll > 50) {
      setIsScrolled(true);
    }
  }, [scrollY]);

  // Determine styles based on scroll state
  const getHeaderStyles = () => {
    const baseStyles = "fixed z-50 transition-all duration-500 ease-in-out";
    const pillStyles = "top-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-5xl rounded-full shadow-lg backdrop-blur-md";

    // If menu is open, force transparent style (overrides everything)
    if (isMenuOpen) {
      return `${baseStyles} top-0 w-full bg-transparent text-white`;
    }

    // If not scrolled, always transparent (position zero)
    if (!isScrolled) {
      return `${baseStyles} top-0 w-full bg-transparent text-white`;
    }

    // Scrolled state - determine color based on section background
    // chaos (Hero) & warning (Stats/CTA) are Dark sections -> Header should be White
    if (headerMode === 'chaos' || headerMode === 'warning') {
      return `${baseStyles} ${pillStyles} bg-white/90 text-[#28236b] border border-white/20`;
    }

    // drift (About/Services/Projects) are Light sections -> Header should be Dark
    return `${baseStyles} ${pillStyles} bg-[#28236b]/90 text-white border border-[#28236b]/20`;
  };

  const styles = getHeaderStyles();

  // Dark text when scrolled (White Header) AND in chaos or warning mode (Dark Section)
  const isDarkText = !isMenuOpen && isScrolled && (headerMode === 'warning' || headerMode === 'chaos');

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
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
              className={`${isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'} w-auto transition-all duration-500 ${isDarkText ? 'brightness-0' : 'brightness-0 invert'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium ${isScrolled ? 'text-sm' : 'text-base'} tracking-wide hover:text-[#ff4400] transition-colors relative group ${isDarkText ? 'text-[#28236b]' : 'text-white/90'}`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4400] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link href="/contact">
              <button className={`bg-[#ff4400] text-[#28236b] ${isScrolled ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'} rounded-full font-bold hover:bg-white hover:text-[#ff4400] transition-all duration-300 shadow-lg shadow-[#ff4400]/20`}>
                Get Started
              </button>
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile & Tablet) */}
          <button
            className={`md:hidden z-50 relative p-2 focus:outline-none ${isMenuOpen ? 'text-white' : (isDarkText ? 'text-[#28236b]' : 'text-white')}`}
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
