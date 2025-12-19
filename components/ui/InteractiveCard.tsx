"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function InteractiveCard({ children, className = "", onClick }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Initialize useGSAP for proper lifecycle management
  const { contextSafe } = useGSAP(
    () => {
      // Non-event-driven animations can go here
    },
    { scope: cardRef }
  );

  // eslint-disable-next-line react-hooks/refs
  const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update spotlight position
    setSpotlight({ x, y });

    // Calculate 3D tilt based on cursor position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max ±10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  });

  // eslint-disable-next-line react-hooks/refs
  const handleMouseLeave = contextSafe(() => {
    if (!cardRef.current) return;
    setIsHovered(false);

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.inOut", // Balanced, responsive feel for interactive elements
    });
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {/* Spotlight effect */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[35px] opacity-50 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 200px at ${spotlight.x}px ${spotlight.y}px, rgba(255, 255, 255, 0.15), transparent)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
