"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMotion } from "@/contexts/MotionContext";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isMotionReduced } = useMotion();

  if (isMotionReduced) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Curtain transition overlay */}
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-[#7076C6] to-[#4B3A5E] origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }} // expo.inOut
        />
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-[#7076C6] to-[#4B3A5E] origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.6 }} // expo.inOut
        />
        
        {/* Page content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
