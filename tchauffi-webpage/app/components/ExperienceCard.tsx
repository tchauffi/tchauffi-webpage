interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  subtitle?: string;
}

export default function ExperienceCard({ 
  title, 
  company, 
  location, 
  period, 
  highlights,
  subtitle 
}: ExperienceCardProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
        <div>
          <h3 className="text-lg font-bold text-primary">{title}</h3>
          {subtitle && <p className="text-sm text-primary mt-1">{subtitle}</p>}
          <p className="text-accent font-semibold">{company} — {location}</p>
        </div>
        <span className="text-sm italic text-subtle md:text-right">{period}</span>
      </div>
      <ul className="mt-3 space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start text-sm text-text">
            <span className="text-accent mr-2 mt-1 flex-shrink-0">›</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
