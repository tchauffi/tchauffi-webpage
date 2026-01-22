'use client';

interface StatCardProps {
  value: string;
  label: string;
  icon: string;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-subtle">{label}</div>
    </div>
  );
}
