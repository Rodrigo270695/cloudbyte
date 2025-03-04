'use client';

import Badge from '@/app/components/ui/Badge';

interface SectionHeaderProps {
  badge: string;
  badgeColor?: 'blue' | 'red' | 'green' | 'purple';
  title: string;
  description: string;
}

export default function SectionHeader({ badge, badgeColor = 'blue', title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <Badge text={badge} color={badgeColor} />
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {title}
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
        {description}
      </p>
    </div>
  );
}