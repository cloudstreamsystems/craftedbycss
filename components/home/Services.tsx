"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { theme } from "@/lib/theme";

gsap.registerPlugin(ScrollTrigger);
import Container from "@/components/ui/Container";
import { services } from "@/lib/data/services";
import Link from "next/link";

import LottieIcon from "@/components/ui/LottieIcon";
import brandIdentityAnim from "@/public/animations/brand-identity.json";
import websiteDesignAnim from "@/public/animations/website-design.json";
import artDirectionAnim from "@/public/animations/art-direction.json";
import developmentAnim from "@/public/animations/development.json";

const lottieMap = {
  palette: brandIdentityAnim,
  monitor: websiteDesignAnim,
  compass: artDirectionAnim,
  code: developmentAnim,
};

// Use theme gradients for consistent brand colors
const gradients = theme.gradients;

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const bgTopRef = useRef(null);
  const bgBottomRef = useRef(null);

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

    // Animate title first
    tl.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    })
      // Then stagger the service cards
      .from(".service-card", {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 0.8,
        ease: "power4.out"
      }, "-=0.4"); // Start slightly before title finishes

    // Parallax backgrounds
    gsap.to(bgTopRef.current, {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    });

    gsap.to(bgBottomRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration with parallax */}
      <div ref={bgTopRef} className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-30" />
      <div ref={bgBottomRef} className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-30" />

      <Container>
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block text-[#28236b] font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#28236b]">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions crafted to elevate your brand and drive measurable results
          </p>
        </div>
      </Container>

      <div className="w-full px-4 md:px-8 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const animationData = lottieMap[service.icon as keyof typeof lottieMap];
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={service.id}
                className="service-card group"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 border border-[#8B93D6] hover:border-[#FF5722] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                  {/* Gradient accent on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />

                  <div className="relative z-10 text-center flex flex-col h-full">
                    {/* Icon with amber background - centered */}
                    <div className="flex justify-center mb-6">
                      <motion.div
                        className="w-32 h-32 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <LottieIcon animationData={animationData} className="w-full h-full" />
                      </motion.div>
                    </div>

                    <h3 className="text-3xl font-bold mb-3 text-[#111827] group-hover:text-[#3730a3] transition-colors min-h-[4rem]">
                      {service.title}
                    </h3>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed min-h-[5rem]">
                      {service.description}
                    </p>

                    <div className="flex flex-col items-center flex-grow mb-6">
                      <ul className="space-y-3 text-left">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-base text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-[#3730a3] mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn more link - centered */}
                    <div className="flex justify-center">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-[#3730a3] font-semibold text-base group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
