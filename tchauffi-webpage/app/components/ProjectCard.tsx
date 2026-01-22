'use client';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  icon?: string;
}

export default function ProjectCard({ title, description, tags, link, icon = "🚀" }: ProjectCardProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-accent"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
            {title}
          </h3>
          <p className="text-text text-sm mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-light-accent text-primary text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
