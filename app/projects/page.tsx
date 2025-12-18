"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ScrollObserver from "@/components/ScrollObserver";
import { projects, categories } from "@/lib/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <ScrollObserver mode="chaos">
        <section className="relative bg-gradient-to-br from-[#28236b] to-[#28236b] text-white py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Explore our portfolio of successful projects across web development, branding, and digital design.
              </p>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* Projects Gallery */}
      <ScrollObserver mode="drift">
        <section className="py-20">
          <Container>
            {/* Filter */}
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Projects Grid with GSAP Stagger Animation */}
            <ProjectGrid projects={filteredProjects} />

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">
                  No projects found in this category.
                </p>
              </div>
            )}
          </Container>
        </section>
      </ScrollObserver>

      {/* Stats Section */}
      <ScrollObserver mode="drift">
        <section className="py-20 bg-[#F4F5FF]">
          <Container>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl font-bold text-[#28236b] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* CTA Section */}
      <ScrollObserver mode="warning">
        <section className="py-20 bg-gradient-to-br from-[#28236b] to-[#28236b] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Let's Create Your Success Story
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Ready to start your project? We'd love to hear about your vision and help bring it to life.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#28236b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </a>
            </div>
          </Container>
        </section>
      </ScrollObserver>
    </>
  );
}

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Happy Clients" },
  { value: "4.9", label: "Average Rating" },
];
