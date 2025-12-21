"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NextImage from "next/image";
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
          className="fixed inset-0 z-50 bg-gradient-to-br from-[#28236b] to-[#28236b] origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }} // expo.inOut
        />
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-[#28236b] to-[#28236b] origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.6 }} // expo.inOut
        />

        {/* Logo Overlay */}
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 0.4, delay: 0.6 } }}
          exit={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
        >
          <div className="relative w-72 md:w-96 h-32">
            <NextImage
              src="/logo.png"
              alt="Cloudstream Systems"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
        </motion.div>

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
