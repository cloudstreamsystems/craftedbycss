import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[32px] shadow-lg p-6",
        hover && "transition-transform duration-300 hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
