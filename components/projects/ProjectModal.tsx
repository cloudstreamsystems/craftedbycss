"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/lib/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

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

              {/* View Live Demo Button */}
              {project.demoUrl && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                  <a
                    href={project.demoUrl}
                    target={project.demoUrl === "#" ? undefined : "_blank"}
                    rel={project.demoUrl === "#" ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (project.demoUrl === "#") {
                        e.preventDefault();
                      }
                    }}
                    className={`flex items-center gap-2 bg-[#28236b] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 group ${project.demoUrl === "#" ? "cursor-default opacity-80" : "hover:bg-[#1a1648] hover:scale-105"}`}
                  >
                    View Live Demo
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Render modal via portal to document.body to escape pinned section
  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
