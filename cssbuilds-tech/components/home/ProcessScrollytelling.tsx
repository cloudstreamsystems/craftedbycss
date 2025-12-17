"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import { Lightbulb, Rocket, Palette, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = [Lightbulb, Rocket, Palette, TrendingUp];

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

export default function ProcessScrollytelling() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(stepsRefs.current, { opacity: 0, y: 50 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

      // Create scrubbed timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=80%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          once: true, // Only play once, prevent re-trigger on scroll up
        },
      });

      // Intro pause
      tl.to({}, { duration: 0.1 });

      // Animate each step sequentially
      processSteps.forEach((_, index) => {
        const step = stepsRefs.current[index];
        if (!step) return;

        // Draw line to this step
        tl.to(lineRef.current, {
          scaleX: (index + 1) / processSteps.length,
          duration: 0.4,
          ease: "power2.inOut",
        }, `step${index}`);

        // Fade out previous step
        if (index > 0) {
          const prevStep = stepsRefs.current[index - 1];
          tl.to(prevStep, {
            opacity: 0.3,
            scale: 0.95,
            duration: 0.3,
          }, `step${index}`);
        }

        // Fade in current step
        tl.to(step, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        }, `step${index}+=0.2`);

        // Hold on current step
        tl.to({}, { duration: 0.3 });
      });

      // Final pause
      tl.to({}, { duration: 0.2 });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#F4F5FF] to-white relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block text-[#7076C6] font-semibold text-sm uppercase tracking-wider mb-4">
            How We Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#4B3A5E]">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A proven methodology that transforms ideas into exceptional digital experiences
          </p>
        </div>

        <div className="relative">
          {/* Animated connection line */}
          <div 
            ref={lineRef}
            className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600" 
            style={{ top: '4rem' }} 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = icons[index];
              
              return (
                <div
                  key={index}
                  ref={(el) => { stepsRefs.current[index] = el; }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 h-full shadow-lg border-2 border-transparent">
                    {/* Step Number with Icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#7076C6]">
                        <span className="text-lg font-bold text-[#7076C6]">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-[#4B3A5E]">
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
