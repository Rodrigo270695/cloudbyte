'use client';

import { useState } from 'react';
import Badge from './ui/Badge';
import ProductCard from './ProductCard';

// Definir los colores válidos para el Badge
const validColors = ["blue", "green", "purple", "red"] as const;
type BadgeColorType = typeof validColors[number] | undefined;

interface ProductSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  badgeText?: string;
  badgeColor?: string;
  productBadgeText?: string;
  buttonColor?: string;
  products: any[];
  bgColor?: string;
}

export default function ProductSection({ 
  id,
  title, 
  subtitle,
  description, 
  badgeText, 
  badgeColor = "blue",
  productBadgeText,
  buttonColor = "blue",
  products,
  bgColor = "bg-white"
}: ProductSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Convertir badgeColor a un tipo válido para Badge
  const validBadgeColor = (badgeColor && validColors.includes(badgeColor as any)) 
    ? badgeColor as BadgeColorType 
    : "blue" as BadgeColorType;
  
  // Extraer categorías únicas de los productos
  const categories = ['all', ...new Set(products.map(product => product.category).filter(Boolean))];
  
  // Filtrar productos por categoría seleccionada
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {badgeText && <Badge text={badgeText} color={validBadgeColor} />}
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">{subtitle}</p>
          )}
          {description && (
            <p className="mt-2 max-w-3xl mx-auto text-base text-gray-500">{description}</p>
          )}
        </div>
        
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              badgeText={productBadgeText || product.badge?.text || ""}
              badgeColor={product.badge?.color || badgeColor || "blue"}
              buttonColor={product.buttonColor || buttonColor || "blue"}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}