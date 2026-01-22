'use client';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string[];
  isLeft?: boolean;
}

export default function TimelineItem({ year, title, company, description, isLeft = true }: TimelineItemProps) {
  return (
    <div className={`flex gap-8 items-start ${!isLeft ? 'flex-row-reverse' : ''}`}>
      {/* Content */}
      <div className={`flex-1 ${!isLeft ? 'text-right' : ''}`}>
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-bold rounded-full mb-3">
            {year}
          </span>
          <h3 className="text-xl font-bold text-primary mb-1">{title}</h3>
          <p className="text-accent font-semibold mb-3">{company}</p>
          <ul className={`space-y-2 ${!isLeft ? 'text-right' : ''}`}>
            {description.map((item, index) => (
              <li key={index} className="text-sm text-text flex items-start gap-2">
                {isLeft && <span className="text-accent mt-1 flex-shrink-0">•</span>}
                <span>{item}</span>
                {!isLeft && <span className="text-accent mt-1 flex-shrink-0">•</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Timeline dot */}
      <div className="relative flex flex-col items-center">
        <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
        <div className="w-1 h-full bg-gradient-to-b from-accent to-transparent"></div>
      </div>
      
      {/* Spacer */}
      <div className="flex-1"></div>
    </div>
  );
}
