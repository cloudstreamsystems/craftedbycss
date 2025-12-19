"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { projects, Project } from "@/lib/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProjectModal from "@/components/projects/ProjectModal";

gsap.registerPlugin(ScrollTrigger);

export default function RecentProjects() {
  // Show all projects
  const featuredProjects = projects;
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Use useGSAP for proper lifecycle management
  useGSAP(() => {
    if (!gridRef.current) return;

    const cards = Array.from(gridRef.current.querySelectorAll(".project-card-item"));
    if (cards.length === 0) return;

    const cardsPerRow = 3;
    const row1 = cards.slice(0, cardsPerRow);
    const row2 = cards.slice(cardsPerRow);

    // Set initial state
    gsap.set(cards, { opacity: 0, y: 100, rotateX: 15, scale: 0.9 });

    // Animate row 1 with dramatic effect
    row1.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out", // Smooth, deliberate deceleration for content reveals
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        delay: index * 0.15,
      });
    });

    // Animate row 2 with dramatic effect
    row2.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out", // Smooth, deliberate deceleration for content reveals
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        delay: index * 0.15,
      });
    });
  }, { scope: gridRef, dependencies: [] });

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#111827]">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore some of our latest work and see how we&apos;ve helped businesses transform their digital presence
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" style={{ perspective: '1000px' }}>
          {featuredProjects.map((project) => (
            <InteractiveCard
              key={project.id}
              className="project-card-item group bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-[#28236b]/5 text-[#28236b] px-4 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#111827] group-hover:text-[#28236b] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </InteractiveCard>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#28236b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a1648] transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
