interface SkillCategoryProps {
  category: string;
  skills: string;
}

export default function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div className="mb-3">
      <span className="font-bold text-primary">{category}:</span>{' '}
      <span className="text-text">{skills}</span>
    </div>
  );
}
