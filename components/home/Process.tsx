"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { Lightbulb, Rocket, Palette, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = [Lightbulb, Rocket, Palette, TrendingUp];

export default function Process() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  // GSAP Timeline for orchestrated animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
        once: true,
      }
    });

    // Animate title
    tl.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    })
      // Animate connection line
      .from(lineRef.current, {
        scaleX: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.3")
      // Stagger the process steps
      .from(".process-step", {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power4.out"
      }, "-=0.7"); // Start while line is animating
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-[#28236b]/5 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#28236b]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

      <Container>
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block text-[#28236b] font-semibold text-sm uppercase tracking-wider mb-4">
            How We Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A proven methodology that transforms ideas into exceptional digital experiences
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div ref={lineRef} className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#28236b]/20 via-cyan-200 to-[#28236b]/20 origin-left" style={{ top: '4rem' }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={index}
                  className="process-step relative"
                >
                  <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#28236b]/20">
                    {/* Step Number with Icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#28236b] via-[#06B6D4] to-[#28236b] rounded-2xl flex items-center justify-center shadow-xl">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#28236b]">
                        <span className="text-lg font-bold text-[#28236b]">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-[#111827]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

const processSteps = [
  {
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience to create a solid foundation for success.",
  },
  {
    title: "Strategy",
    description: "We develop a comprehensive strategy that aligns with your objectives and positions you for growth.",
  },
  {
    title: "Design & Build",
    description: "Our team brings your vision to life with stunning design and robust, scalable development.",
  },
  {
    title: "Launch & Grow",
    description: "We launch your project and provide ongoing support to ensure continued success and optimization.",
  },
];
