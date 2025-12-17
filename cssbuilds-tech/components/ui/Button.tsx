"use client";

import { ButtonHTMLAttributes, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  magnetic = false,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Initialize useGSAP and get contextSafe for event handlers
  const { contextSafe } = useGSAP(
    () => {
      // Non-event-driven GSAP animations can go here if needed
    },
    { scope: buttonRef }
  );
  
  // Magnetic effect using GSAP with boundary constraints - now contextSafe
  const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate desired movement
    let deltaX = (e.clientX - centerX) * 0.3;
    let deltaY = (e.clientY - centerY) * 0.3;
    
    // Constrain movement to prevent overlap (max 8px in any direction)
    const maxMovement = 8;
    deltaX = Math.max(-maxMovement, Math.min(maxMovement, deltaX));
    deltaY = Math.max(-maxMovement, Math.min(maxMovement, deltaY));
    
    gsap.to(buttonRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  });
  
  const handleMouseLeave = contextSafe(() => {
    if (!magnetic || !buttonRef.current) return;
    
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  });
  const variants = {
    primary: "bg-primary hover:bg-accent text-white",
    secondary: "bg-secondary hover:bg-primary text-white",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        "font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      onMouseMove={magnetic ? handleMouseMove : undefined}
      onMouseLeave={magnetic ? handleMouseLeave : undefined}
      {...props}
    >
      {children}
    </button>
  );
}
