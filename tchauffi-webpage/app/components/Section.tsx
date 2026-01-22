import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`mb-10 ${className}`}>
      <h2 className="text-2xl font-bold text-primary mb-2 pb-2 border-b-2 border-accent">
        {title}
      </h2>
      <div className="mt-4">
        {children}
      </div>
    </section>
  );
}
