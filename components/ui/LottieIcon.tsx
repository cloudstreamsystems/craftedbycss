"use client";

import { useLottie } from "lottie-react";
import { useEffect, useState } from "react";

interface LottieIconProps {
    animationData: any;
    className?: string;
}

export default function LottieIcon({ animationData, className }: LottieIconProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const options = {
        animationData,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    if (!isClient) {
        return <div className={className} />;
    }

    return <div className={className}>{View}</div>;
}
