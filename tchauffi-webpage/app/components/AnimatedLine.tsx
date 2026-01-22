"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedLineProps {
  variant?: "thick" | "thin";
  width?: string;
  className?: string;
}

export default function AnimatedLine({ 
  variant = "thin", 
  width = "128px",
  className = "" 
}: AnimatedLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const baseClass = variant === "thick" 
    ? "lumon-lines-scroll" 
    : "lumon-lines-thin-scroll";

  return (
    <div
      ref={lineRef}
      className={`${baseClass} ${isVisible ? "animate" : ""} ${className}`}
      style={{ "--line-width": width } as React.CSSProperties}
    />
  );
}
