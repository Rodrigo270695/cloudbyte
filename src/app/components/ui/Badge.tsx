'use client';

interface BadgeProps {
    text: string;
    color?: string;
}

export default function Badge({ text, color = "blue" }: BadgeProps) {
    const colorClasses: Record<string, string> = {
        blue: "bg-blue-100 text-blue-800",
        green: "bg-green-100 text-green-800",
        purple: "bg-purple-100 text-purple-800",
        red: "bg-red-100 text-red-800",
    };

    const bgColorClass = colorClasses[color] || colorClasses.blue;

    return (
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide ${bgColorClass}`}>
            {text}
        </span>
    );
} 