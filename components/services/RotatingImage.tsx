"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface RotatingImageProps {
    src: string;
    alt: string;
}

export default function RotatingImage({ src, alt }: RotatingImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Rotate from -15deg to 15deg as the user scrolls past
    const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
            <motion.div style={{ rotate }} className="relative w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </motion.div>
        </div>
    );
}
