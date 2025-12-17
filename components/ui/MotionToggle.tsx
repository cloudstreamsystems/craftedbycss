"use client";

import { motion } from "framer-motion";
import { Zap, ZapOff } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

export default function MotionToggle() {
  const { isMotionReduced, toggleMotion } = useMotion();

  return (
    <button
      onClick={toggleMotion}
      className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors text-white text-sm font-medium"
      aria-label={isMotionReduced ? "Enable animations" : "Reduce animations"}
      title={isMotionReduced ? "Enable animations" : "Reduce animations"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isMotionReduced ? 0 : 360 }}
        transition={{ duration: 0.5 }}
      >
        {isMotionReduced ? (
          <ZapOff className="w-4 h-4" />
        ) : (
          <Zap className="w-4 h-4" />
        )}
      </motion.div>
      <span className="hidden sm:inline">
        {isMotionReduced ? "Enable Motion" : "Reduce Motion"}
      </span>
    </button>
  );
}
