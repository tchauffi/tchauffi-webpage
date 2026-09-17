"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "work", label: "Work" },
  { id: "play", label: "Play" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 md:px-16 lg:px-24 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-white/80 hover:text-accent transition-colors tracking-wider"
        >
          TC
        </a>
        <div className="flex items-center gap-3 sm:gap-5 md:gap-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`font-mono text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-wider transition-colors ${
                activeId === link.id ? "text-accent" : "text-white/50 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
