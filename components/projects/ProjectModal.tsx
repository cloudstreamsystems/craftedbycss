"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, Tag } from "lucide-react";
import { Project } from "@/lib/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  "Web Development": "from-blue-500 to-cyan-500",
  "Branding": "from-purple-500 to-pink-500",
  "UI/UX": "from-orange-500 to-red-500",
  "Social Media": "from-green-500 to-emerald-500",
};

const categoryBackgrounds: Record<string, string> = {
  "Web Development": "#FF6347", // Tomato orange - closer match to mockup
  "Branding": "#9B7EBD", // Solid purple to match mockup
  "UI/UX": "#8B93D6", // Solid blue to match mockup
  "Social Media": "#2ECC71", // Solid green to match mockup
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const gradient = categoryColors[project.category] || "from-purple-500 to-pink-500";
  const modalBackground = categoryBackgrounds[project.category] || "#8B93D6";

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[9999]"
            onClick={onClose}
          >
            {/* Modal - Clean image-only view */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 z-10 bg-white p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              {/* Full Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-cover rounded-[32px] shadow-2xl block"
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Render modal via portal to document.body to escape pinned section
  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
