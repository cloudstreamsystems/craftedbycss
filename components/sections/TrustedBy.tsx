"use client";

import { motion } from "framer-motion";
import { useMotion } from "@/contexts/MotionContext";
import Container from "@/components/ui/Container";
import LogoCarousel, { techLogos, clientLogos } from "@/components/ui/LogoCarousel";

interface TrustedByProps {
  title?: string;
  subtitle?: string;
  logoSet?: "tech" | "clients" | "custom";
  customLogos?: Array<{
    id: string;
    name: string;
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  className?: string;
}

export default function TrustedBy({
  title = "Trusted by Industry Leaders",
  subtitle = "Join hundreds of companies that trust us with their digital presence",
  logoSet = "tech",
  customLogos,
  className = "",
}: TrustedByProps) {
  const { isMotionReduced } = useMotion();

  const getLogos = () => {
    if (customLogos) return customLogos;
    return logoSet === "tech" ? techLogos : clientLogos;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={`py-16 md:py-24 bg-gray-50 ${className}`}>
      <Container>
        <motion.div
          variants={isMotionReduced ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Header */}
          <motion.div
            variants={isMotionReduced ? {} : itemVariants}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Logo Carousel */}
          <motion.div
            variants={isMotionReduced ? {} : itemVariants}
            className="relative"
          >
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

            <LogoCarousel
              logos={getLogos()}
              speed={5}
              direction="left"
              pauseOnHover={true}
              grayscale={true}
              className="py-8"
            />
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
