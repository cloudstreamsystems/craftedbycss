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
      </Container>

      <div className="w-full px-4 md:px-8 max-w-[1920px] mx-auto mb-8 md:mb-12">
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ perspective: '1000px' }}>
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
      </div>

      <Container>
        {/* View All Projects Button */}
        <div className="text-center mt-12 md:mt-20">
          <div className="relative inline-block group isolate">
            <div className="relative z-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[#28236b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a1648] transition-colors"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Tooltip */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:left-full md:ml-12 block opacity-100 transition-opacity duration-500 scale-90 md:scale-100 pointer-events-none w-max"
              style={{ zIndex: 9999, transform: 'translateZ(10px)' }}
            >
              <div className="relative flex flex-col items-center md:items-start transform rotate-[-6deg]">
                <span className="font-[family-name:var(--font-caveat)] text-3xl text-[#28236b] leading-tight text-center md:text-left">
                  Click to view <br className="hidden md:block" /> all our projects
                </span>
                {/* Hand-drawn arrow */}
                <svg
                  className="absolute top-full left-1/2 -translate-x-1/2 md:top-6 md:-left-16 w-12 h-12 md:w-24 md:h-24 text-[#28236b] transform -rotate-90 md:rotate-0 md:-translate-y-4"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Curved arrow pointing left for desktop, down for mobile (via rotation) */}
                  <path d="M90,10 Q50,60 10,50" />
                  <path d="M10,50 L25,40" />
                  <path d="M10,50 L25,60" />
                </svg>
              </div>
            </div>
          </div>
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
