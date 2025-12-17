"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".project-card");

    // Clear previous animations
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.set(cards, { clearProps: "all" });

    // Animate each card individually on scroll (like GSAP website)
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 120,
          scale: 0.85,
          rotateX: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // Start when card is 85% down the viewport
            end: "top 50%",
            toggleActions: "play none none none",
            scrub: false, // Smooth animation, not tied to scroll position
          },
        }
      );

      // Add subtle parallax effect on scroll
      gsap.to(card, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth parallax tied to scroll
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [projects]);

  return (
    <div
      ref={gridRef}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
