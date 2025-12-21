"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Check, Palette, Monitor, Shield, Code } from "lucide-react";
import { Service } from "@/lib/data/services";
import RotatingImage from "@/components/services/RotatingImage";
import CybersecurityDemo from "@/components/services/CybersecurityDemo";

interface ServiceSectionProps {
    service: Service;
    index: number;
}

const iconMap: Record<string, any> = {
    palette: Palette,
    monitor: Monitor,
    shield: Shield,
    code: Code,
};

export default function ServiceSection({ service, index }: ServiceSectionProps) {
    const isEven = index % 2 === 0;
    const Icon = iconMap[service.icon];

    // Determine specific visual component based on service ID
    const renderVisual = () => {
        switch (service.id) {
            case "brand-identities":
                return (
                    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-[#F4F5FF]">
                        <Image
                            src="/images/Bag.png"
                            alt="Brand Identities"
                            fill
                            className="object-contain p-8 mix-blend-multiply"
                        />
                    </div>
                );
            case "web-design":
                return (
                    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden">
                        <RotatingImage
                            src="/images/abou_res.png"
                            alt="Website / App Design"
                        />
                    </div>
                );
            case "cybersecurity":
                return (
                    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-[#0f172a] shadow-2xl">
                        <CybersecurityDemo />
                    </div>
                );
            case "development":
                return (
                    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-[#F4F5FF] shadow-lg">
                        <Image
                            src="/images/dashboard-demo.png"
                            alt="Development Dashboard"
                            fill
                            className="object-contain"
                        />
                    </div>
                );
            default:
                return (
                    <div className="bg-gradient-to-br from-[#28236b] to-[#28236b] rounded-[32px] p-12 flex items-center justify-center aspect-square md:aspect-[4/3]">
                        <Icon className="w-32 h-32 text-white" />
                    </div>
                );
        }
    };

    // Determine background image based on service ID
    const getBackgroundImage = () => {
        return null;
    };

    const bgImage = getBackgroundImage();

    return (
        <div className="relative py-12 md:py-24 bg-[#28236b]" style={{ backgroundColor: '#28236b' }}>
            {/* Background Container - Full Width Bleed */}
            {bgImage && service.id !== "web-design" && service.id !== "cybersecurity" && (
                <div
                    className={`absolute -top-[40%] -bottom-[40%] w-full z-0 pointer-events-none opacity-50 md:opacity-100
            ${isEven ? "right-0" : "left-0"}
          `}
                >
                    <Image
                        src={bgImage}
                        alt="Background Shape"
                        fill
                        className={`object-cover ${isEven ? "object-right" : "object-left"}`}
                        priority
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? "from-transparent via-[#28236b] to-[#28236b]" : "from-[#28236b] via-[#28236b] to-transparent"}`} />
                </div>
            )}

            <Container>
                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">

                    {/* Visual Column */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`
            md:col-span-6 lg:col-span-7 relative
            order-2 ${isEven ? "md:order-1" : "md:order-2"}
          `}
                    >
                        {renderVisual()}
                    </motion.div>

                    {/* Text Column */}
                    <div
                        className={`
            md:col-span-6 lg:col-span-5 relative
            order-1 ${isEven ? "md:order-2 md:-ml-12" : "md:order-1 md:-mr-12"}
          `}
                    >
                        {/* Mobile Background */}
                        <div className="absolute inset-0 bg-[#28236b] rounded-[32px] -z-10" />

                        <div className="p-8 md:p-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                            >
                                {service.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-lg md:text-xl mb-8 leading-relaxed text-white/90"
                            >
                                {service.description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="grid sm:grid-cols-2 gap-4"
                            >
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-white">
                                            <Check className="w-4 h-4 text-[#28236b]" />
                                        </div>
                                        <span className="text-base font-medium text-white">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
