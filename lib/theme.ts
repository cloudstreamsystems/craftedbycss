/**
 * Centralized Theme Configuration
 * "Confident Indigo" Palette
 */

export const theme = {
  colors: {
    background: "#FFFFFF",
    foreground: "#111827",
    primary: "#3730a3",          // Confident Indigo
    secondary: "#06B6D4",        // Professional Cyan
    accent: "#ff4400",           // Energetic Amber
    muted: "#6B7280",            // Gray for secondary text
  },

  // Category colors for projects
  categoryColors: {
    "Web Development": "#3730a3",  // Primary Indigo
    "Branding": "#06B6D4",         // Secondary Cyan
    "UI/UX": "#ff4400",            // Accent Amber
    "Social Media": "#EF4444",     // Keep distinct red
  },

  // Category color classes (Tailwind-compatible)
  categoryGradients: {
    "Web Development": "from-[#3730a3] to-indigo-400",
    "Branding": "from-[#06B6D4] to-cyan-300",
    "UI/UX": "from-[#ff4400] to-amber-300",
    "Social Media": "from-rose-500 to-pink-500",
  },

  // Gradients for service cards and icons
  gradients: [
    "from-[#3730a3] to-indigo-400",  // Primary Indigo
    "from-[#06B6D4] to-cyan-300",    // Secondary Cyan
    "from-[#ff4400] to-amber-300",   // Accent Amber
    "from-rose-500 to-pink-500",     // Rose/Pink variant
  ],

  // Background surfaces
  surfaces: {
    card: "#FFFFFF",
    elevated: "#F9FAFB",
    hover: "#F3F4F6",
    accent: "#FEF3C7",  // Light amber tint
  },

  // Text colors
  text: {
    primary: "#111827",
    secondary: "#6B7280",
    tertiary: "#9CA3AF",
    inverse: "#FFFFFF",
  },
} as const;

// Helper function to get category color
export const getCategoryColor = (category: string) => {
  return theme.categoryColors[category as keyof typeof theme.categoryColors] || theme.colors.primary;
};

// Helper function to get category gradient
export const getCategoryGradient = (category: string) => {
  return theme.categoryGradients[category as keyof typeof theme.categoryGradients] || theme.gradients[0];
};

export default theme;
