'use client';
import { useState } from 'react';
import Link from 'next/link';

interface SubmenuItem {
    name: string;
    href: string;
}

interface DropdownProps {
    title: string;
    items: SubmenuItem[];
}

export default function DropdownMenu({ title, items }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
            <button className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600">
                {title}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href} 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div> 
            )}
        </div>
    );
} 