
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { Target, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const bgLeft = useRef(null);
  const bgRight = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  // Parallax effects for backgrounds
  useGSAP(() => {
    // Parallax backgrounds
    gsap.to(bgLeft, {
      y: 100,
      x: -50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    });

    gsap.to(bgRight, {
      y: -80,
      x: 30,
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
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Moving Clouds - Left to Right */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cloud 1 - Large slow cloud */}
        <div
          className="absolute top-10 w-96 h-32 bg-white/5 rounded-full blur-3xl animate-cloud-slow"
          style={{
            animation: 'cloudMove1 40s linear infinite',
          }}
        />

        {/* Cloud 2 - Medium speed cloud */}
        <div
          className="absolute top-32 w-80 h-24 bg-[#28236b]/5 rounded-full blur-2xl"
          style={{
            animation: 'cloudMove2 35s linear infinite',
            animationDelay: '-10s'
          }}
        />

        {/* Cloud 3 - Fast small cloud */}
        <div
          className="absolute top-64 w-64 h-20 bg-cyan-100/6 rounded-full blur-2xl"
          style={{
            animation: 'cloudMove3 30s linear infinite',
            animationDelay: '-20s'
          }}
        />

        {/* Cloud 4 - Bottom layer */}
        <div
          className="absolute bottom-20 w-72 h-28 bg-white/4 rounded-full blur-3xl"
          style={{
            animation: 'cloudMove4 45s linear infinite',
            animationDelay: '-15s'
          }}
        />
      </div>

      {/* Background decorations with parallax */}
      <div ref={bgLeft} className="absolute -left-20 top-20 w-96 h-96 bg-gradient-to-br from-[#28236b]/20 to-transparent rounded-full blur-3xl" />
      <div ref={bgRight} className="absolute -right-20 bottom-20 w-80 h-80 bg-gradient-to-tl from-cyan-200/40 to-transparent rounded-full blur-3xl" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div ref={imageRef} className="relative lg:-ml-20 flex justify-center items-center">
            <motion.div
              style={{ rotate }}
              className="relative w-[80%] max-w-[500px] aspect-square p-8"
            >
              <Image
                src="/images/abou_res.png"
                alt="Cloudstream Systems - Digital Solutions"
                fill
                className="object-contain mix-blend-multiply drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827]">
              About Cloudstream Systems
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We&apos;re a creative digital agency passionate about building exceptional brands and digital experiences that drive real results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in design and development, we combine stunning aesthetics with powerful functionality to create solutions that not only look beautiful but perform exceptionally.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#28236b] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] mb-1">Results-Driven</h3>
                  <p className="text-gray-600 text-sm">
                    Every project focused on measurable outcomes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#28236b] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] mb-1">Collaborative</h3>
                  <p className="text-gray-600 text-sm">
                    Working as partners to achieve your goals
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block bg-[#28236b] text-white border-2 border-[#28236b] px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#28236b] hover:border-[#28236b] transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
