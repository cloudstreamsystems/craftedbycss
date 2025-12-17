"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const heroContainerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLetsTalkHovered, setIsLetsTalkHovered] = useState(false);
  const [isViewWorkHovered, setIsViewWorkHovered] = useState(false);
  const headlineLines = [
    "Transforming Visions Into",
    "Exceptional Digital Experiences",
  ];
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], [0, 300]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0]);

  // GSAP Timeline for word reveal animation
  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Animate all words with stagger
    tl.from(".hero-headline-word", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    });
  }, { scope: heroContainerRef });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <section ref={heroContainerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y, opacity }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Confident Indigo gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3730a3]/90 via-[#1e1b4b]/85 to-[#3730a3]/90" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        {/* Word-by-Word Reveal with GSAP */}
        <div className="mb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide md:tracking-wider max-w-6xl mx-auto">
            {headlineLines.map((line, lineIndex) => (
              <div
                key={`headline-line-${lineIndex}`}
                className={`w-full flex flex-wrap justify-start md:justify-center gap-x-3 md:gap-x-7 gap-y-2 px-2 md:px-6 ${
                  lineIndex === 0 ? "mb-2" : "mt-2"
                }`}
              >
                {line.split(" ").map((word, wordIndex) => (
                  <span
                    key={`word-${lineIndex}-${wordIndex}`}
                    className="inline-block hero-headline-word cursor-pointer"
                    onMouseEnter={(e) =>
                      gsap.to(e.currentTarget, {
                        scale: 1.1,
                        color: "#00fa80",
                        duration: 0.2,
                        ease: "power2.out",
                      })
                    }
                    onMouseLeave={(e) =>
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        color: "#ffffff",
                        duration: 0.2,
                        ease: "power2.out",
                      })
                    }
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </h1>
        </div>

        {/* Static Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed font-light">
          Where creativity meets cutting-edge technology
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects">
            <Button 
              size="lg"
              magnetic={true}
              className={
                isViewWorkHovered
                  ? "w-full sm:w-auto !bg-[#00fa80] border-2 border-[#00fa80] text-white font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:!bg-[#00fa80]"
                  : isLetsTalkHovered
                  ? "w-full sm:w-auto !bg-transparent border-2 border-[#00fa80] text-white font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:!bg-transparent"
                  : "w-full sm:w-auto !bg-[#00fa80] border-2 border-[#00fa80] text-white font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:!bg-[#00fa80]"
              }
              onMouseEnter={() => setIsViewWorkHovered(true)}
              onMouseLeave={() => setIsViewWorkHovered(false)}
              onFocus={() => setIsViewWorkHovered(true)}
              onBlur={() => setIsViewWorkHovered(false)}
            >
              View Our Work <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg"
              magnetic={true}
              className={
                isLetsTalkHovered
                  ? "w-full sm:w-auto !bg-[#00fa80] border-2 border-[#00fa80] text-white font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:!bg-[#00fa80]"
                  : "w-full sm:w-auto !bg-transparent border-2 border-[#00fa80] text-white font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:!bg-transparent"
              }
              onMouseEnter={() => setIsLetsTalkHovered(true)}
              onMouseLeave={() => setIsLetsTalkHovered(false)}
              onFocus={() => setIsLetsTalkHovered(true)}
              onBlur={() => setIsLetsTalkHovered(false)}
            >
              Let's Talk
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "40+", label: "Clients" },
            { value: "5+", label: "Years" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
              <div className="text-sm md:text-base text-[#00fa80]/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
