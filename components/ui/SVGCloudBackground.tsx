"use client";

import { motion } from "framer-motion";

export default function SVGCloudBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Indigo gradient */}
          <linearGradient id="cloudGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3730a3" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3730a3" stopOpacity="0.05" />
          </linearGradient>
          
          {/* Cyan gradient */}
          <linearGradient id="cloudGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.04" />
          </linearGradient>
          
          {/* Amber gradient */}
          <linearGradient id="cloudGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.03" />
          </linearGradient>
          
          {/* Blur filter for softer clouds */}
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
          </filter>
        </defs>

        {/* Cloud 1 - Large slow-moving indigo */}
        <motion.ellipse
          cx="200"
          cy="300"
          rx="400"
          ry="250"
          fill="url(#cloudGradient1)"
          filter="url(#blur)"
          animate={{
            cx: [200, 350, 200],
            cy: [300, 250, 300],
            rx: [400, 450, 400],
            ry: [250, 280, 250],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cloud 2 - Medium cyan cloud */}
        <motion.ellipse
          cx="1600"
          cy="200"
          rx="350"
          ry="220"
          fill="url(#cloudGradient2)"
          filter="url(#blur)"
          animate={{
            cx: [1600, 1450, 1600],
            cy: [200, 280, 200],
            rx: [350, 400, 350],
            ry: [220, 250, 220],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Cloud 3 - Bottom amber accent */}
        <motion.ellipse
          cx="900"
          cy="900"
          rx="380"
          ry="240"
          fill="url(#cloudGradient3)"
          filter="url(#blur)"
          animate={{
            cx: [900, 1050, 900],
            cy: [900, 850, 900],
            rx: [380, 420, 380],
            ry: [240, 270, 240],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Cloud 4 - Small floating indigo */}
        <motion.circle
          cx="600"
          cy="700"
          r="200"
          fill="url(#cloudGradient1)"
          filter="url(#blur)"
          animate={{
            cx: [600, 700, 600],
            cy: [700, 650, 700],
            r: [200, 230, 200],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Cloud 5 - Top right cyan accent */}
        <motion.ellipse
          cx="1400"
          cy="800"
          rx="300"
          ry="180"
          fill="url(#cloudGradient2)"
          filter="url(#blur)"
          animate={{
            cx: [1400, 1300, 1400],
            cy: [800, 750, 800],
            rx: [300, 330, 300],
            ry: [180, 200, 180],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </svg>
    </div>
  );
}
