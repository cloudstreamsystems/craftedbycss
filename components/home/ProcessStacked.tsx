"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { Lightbulb, Rocket, Palette, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        title: "Discovery",
        description: "We start by understanding your business, goals, and target audience to create a solid foundation for success.",
        icon: Lightbulb,
        color: "bg-[#28236b]", // Indigo
        textColor: "text-white",
        iconColor: "text-[#ff4400]",
        numberColor: "text-white/20",
    },
    {
        title: "Strategy",
        description: "We develop a comprehensive strategy that aligns with your objectives and positions you for growth.",
        icon: Rocket,
        color: "bg-white", // White
        textColor: "text-[#28236b]",
        iconColor: "text-[#28236b]",
        numberColor: "text-[#28236b]/10",
    },
    {
        title: "Design & Build",
        description: "Our team brings your vision to life with stunning design and robust, scalable development.",
        icon: Palette,
        color: "bg-[#ff4400]", // Orange
        textColor: "text-white",
        iconColor: "text-white",
        numberColor: "text-white/20",
    },
    {
        title: "Launch & Grow",
        description: "We launch your project and provide ongoing support to ensure continued success and optimization.",
        icon: TrendingUp,
        color: "bg-black", // Black
        textColor: "text-white",
        iconColor: "text-[#ff4400]",
        numberColor: "text-white/20",
    },
];

export default function ProcessStacked() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="py-20 bg-gray-50 relative">
            <Container>
                <div className="text-center mb-20">
                    <span className="inline-block text-[#28236b] font-semibold text-sm uppercase tracking-wider mb-4">
                        How We Work
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#28236b]">
                        Our Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A proven methodology that transforms ideas into exceptional digital experiences
                    </p>
                </div>

                <div className="relative">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="sticky top-32 mb-8 last:mb-0"
                                style={{
                                    zIndex: index + 1,
                                }}
                            >
                                <div
                                    className={`${step.color} ${step.textColor} rounded-[40px] p-8 md:p-16 shadow-2xl transition-transform duration-500 min-h-[400px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 border border-black/5`}
                                >
                                    <div className="flex-1 relative z-10">
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20`}>
                                                <Icon className={`w-8 h-8 ${step.iconColor}`} />
                                            </div>
                                            <span className="text-xl font-medium opacity-80">Step 0{index + 1}</span>
                                        </div>

                                        <h3 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-lg md:text-2xl opacity-90 leading-relaxed max-w-2xl">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Giant Number Decoration */}
                                    <div className={`absolute right-4 bottom-0 md:right-16 md:top-1/2 md:-translate-y-1/2 text-[12rem] md:text-[20rem] font-bold leading-none ${step.numberColor} pointer-events-none select-none`}>
                                        {index + 1}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
