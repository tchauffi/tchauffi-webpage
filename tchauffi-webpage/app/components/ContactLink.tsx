import { ReactNode } from 'react';

interface ContactLinkProps {
  icon: ReactNode;
  href?: string;
  children: ReactNode;
}

export default function ContactLink({ icon, href, children }: ContactLinkProps) {
  const content = (
    <span className="flex items-center gap-2 text-text hover:text-accent transition-colors">
      {icon}
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return <div className="inline-block">{content}</div>;
}
