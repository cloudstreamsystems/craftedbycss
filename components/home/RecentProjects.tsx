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

      <div className="w-full px-2 md:px-4 mx-auto mb-8 md:mb-12">
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
                  <span className="inline-block bg-[#ff4400] text-white px-4 py-1 rounded-full text-sm font-semibold">
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
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#28236b] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a1648] transition-colors relative z-0"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Tooltip */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 md:-top-14 md:translate-y-0 md:left-full md:ml-32 block opacity-100 transition-opacity duration-500 scale-90 md:scale-100 pointer-events-none w-max"
              style={{ zIndex: 9999, transform: 'translateZ(10px)' }}
            >
              <div className="relative flex flex-col items-center md:items-start transform rotate-[-6deg]">
                <span className="font-[family-name:var(--font-caveat)] text-3xl text-[#28236b] leading-tight text-center md:text-left">
                  Click to view <br className="hidden md:block" /> all our projects
                </span>
                {/* Simple hand-drawn arrow pointing from text to button */}
                <svg
                  className="absolute top-1/2 right-full mr-2 hidden md:block w-16 h-16 text-[#28236b]"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Simple curved line from text (right) to button (left) */}
                  <path d="M90,20 Q60,60 30,50" />
                  <path d="M30,50 L40,40" />
                  <path d="M30,50 L40,60" />
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
