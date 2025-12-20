"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useMotion } from "@/contexts/MotionContext";
import Image from "next/image";

interface Logo {
  id: string;
  name: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoCarouselProps {
  logos: Logo[];
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  grayscale?: boolean;
  className?: string;
}

export default function LogoCarousel({
  logos,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: LogoCarouselProps) {
  const { isMotionReduced } = useMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    if (isMotionReduced) return;

    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let currentPosition = 0;
    const logoWidth = scrollElement.scrollWidth / 2; // Half because we duplicated
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Calculate movement based on speed (pixels per second) and delta time
      // speed is roughly pixels per 60 frames, so multiply by 60 to get pixels per second
      const pixelsPerSecond = speed * 60;
      const moveAmount = (pixelsPerSecond * deltaTime) / 1000;

      if (direction === "left") {
        currentPosition -= moveAmount;
      } else {
        currentPosition += moveAmount;
      }

      // Reset position for seamless loop
      if (direction === "left" && currentPosition <= -logoWidth) {
        currentPosition = 0;
      } else if (direction === "right" && currentPosition >= 0) {
        currentPosition = -logoWidth;
      }

      scrollElement.style.transform = `translateX(${currentPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed, direction, isMotionReduced]);

  const handleMouseEnter = () => {
    if (pauseOnHover && scrollRef.current) {
      scrollRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && scrollRef.current) {
      scrollRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex items-center gap-8 md:gap-12 lg:gap-16"
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "max-content",
          ...(isMotionReduced && {
            animation: `scroll-${direction} ${speed}s linear infinite`,
          }),
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 240}
              height={logo.height || 120}
              className="max-w-[240px] max-h-[120px] w-auto h-auto object-contain opacity-70"
            />
          </motion.div>
        ))}
      </div>

      {/* CSS Animation fallback for reduced motion */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

// Preset logo configurations
export const techLogos: Logo[] = [
  {
    id: "react",
    name: "React",
    src: "/logos/react.svg",
    alt: "React",
  },
  {
    id: "nextjs",
    name: "Next.js",
    src: "/logos/nextjs.svg",
    alt: "Next.js",
  },
  {
    id: "typescript",
    name: "TypeScript",
    src: "/logos/typescript.svg",
    alt: "TypeScript",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    src: "/logos/tailwind.svg",
    alt: "Tailwind CSS",
  },
  {
    id: "framer",
    name: "Framer Motion",
    src: "/logos/framer.svg",
    alt: "Framer Motion",
  },
  {
    id: "vercel",
    name: "Vercel",
    src: "/logos/vercel.svg",
    alt: "Vercel",
  },
];

export const clientLogos: Logo[] = [
  {
    id: "react",
    name: "React",
    src: "/logos/react-logo.png",
    alt: "React",
  },
  {
    id: "nodejs",
    name: "Node.js",
    src: "/logos/nodejs-logo.webp",
    alt: "Node.js",
  },
  {
    id: "framer",
    name: "Framer",
    src: "/logos/framer-logo.png",
    alt: "Framer",
  },
  {
    id: "alx",
    name: "ALX",
    src: "/logos/alx-logo.png",
    alt: "ALX",
  },
  {
    id: "canva",
    name: "Canva",
    src: "/logos/canva-logo.png",
    alt: "Canva",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    src: "/logos/pinterest-logo.png",
    alt: "Pinterest",
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    src: "/logos/photoshop-logo.png",
    alt: "Adobe Photoshop",
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    src: "/logos/illustrator-logo.png",
    alt: "Adobe Illustrator",
  },
];
