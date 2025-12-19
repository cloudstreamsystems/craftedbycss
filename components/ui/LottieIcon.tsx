"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import Lottie with no SSR to reduce bundle size
const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-200 rounded-full w-full h-full opacity-20" />,
});

interface LottieIconProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    animationData: any;
    className?: string;
}

export default function LottieIcon({ animationData, className }: LottieIconProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className={`${className} animate-pulse bg-gray-200 rounded-full opacity-20`} />;
    }

    return (
        <div className={className}>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-full"
            />
        </div>
    );
}
