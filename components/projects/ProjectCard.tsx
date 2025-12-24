"use client";

import { useState } from "react";
import { Project } from "@/lib/data/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
}

const categoryColors: Record<string, string> = {
  "Web Development": "from-blue-500 to-cyan-500",
  "Branding": "from-purple-500 to-pink-500",
  "UI/UX": "from-orange-500 to-red-500",
  "Social Media": "from-green-500 to-emerald-500",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const gradient = categoryColors[project.category] || "from-purple-500 to-pink-500";
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable tilt on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTilt({
      x: (y - 0.5) * 10, // Reduced from 20 to 10 for subtler effect
      y: (x - 0.5) * -10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      className="group relative h-full"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="h-full bg-white rounded-[35px] shadow-lg group-hover:shadow-2xl transition-all duration-500"
      >
        <div className="h-full w-full rounded-[35px] overflow-hidden">
          {/* Image */}
          <div
            className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer rounded-t-[35px]"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Real project image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                <span className="font-semibold text-lg">View Project</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-3">
              <span className="inline-block bg-[#ff4400] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#28236b] group-hover:text-[#28236b] transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full hover:border-[#28236b] hover:text-[#28236b] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
}
