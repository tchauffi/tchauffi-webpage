"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = spotRef.current?.parentElement;
    if (!parent) return;

    const handleMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      spotRef.current?.style.setProperty("--spot-x", `${x}%`);
      spotRef.current?.style.setProperty("--spot-y", `${y}%`);
    };

    parent.addEventListener("mousemove", handleMove);
    return () => parent.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={spotRef} className="cursor-spotlight" aria-hidden="true" />;
}
