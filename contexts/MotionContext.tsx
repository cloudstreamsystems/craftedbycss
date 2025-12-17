"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface MotionContextType {
  isMotionReduced: boolean;
  toggleMotion: () => void;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export function MotionProvider({ children }: { children: ReactNode }) {
  const [isMotionReduced, setIsMotionReduced] = useState(false);

  // Load preference from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("reduceMotion");
    if (stored !== null) {
      setIsMotionReduced(stored === "true");
    } else {
      // Check system preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsMotionReduced(prefersReducedMotion);
    }
  }, []);

  const toggleMotion = () => {
    setIsMotionReduced((prev) => {
      const newValue = !prev;
      localStorage.setItem("reduceMotion", String(newValue));
      return newValue;
    });
  };

  return (
    <MotionContext.Provider value={{ isMotionReduced, toggleMotion }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  const context = useContext(MotionContext);
  if (context === undefined) {
    throw new Error("useMotion must be used within a MotionProvider");
  }
  return context;
}
