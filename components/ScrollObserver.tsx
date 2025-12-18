"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useStore, HeaderMode } from "@/store/useStore";

interface ScrollObserverProps {
    mode: HeaderMode;
    children: React.ReactNode;
    className?: string;
}

export default function ScrollObserver({ mode, children, className = "" }: ScrollObserverProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.1, margin: "-5% 0px -50% 0px" });
    const { setHeaderMode } = useStore();

    useEffect(() => {
        if (isInView) {
            setHeaderMode(mode);
        }
    }, [isInView, mode, setHeaderMode]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
