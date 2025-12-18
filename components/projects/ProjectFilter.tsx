"use client";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
              ? "bg-[#28236b] text-white shadow-lg scale-105"
              : "bg-white text-[#28236b] hover:bg-[#F4F5FF] border-2 border-gray-200"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
