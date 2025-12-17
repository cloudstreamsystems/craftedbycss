export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "atli-institute",
    title: "ATLI Institute",
    category: "Web Development",
    description: "Educational institution website with modern design and intuitive navigation",
    image: "/images/projects/atli-institute.jpg",
    tags: ["Web Design", "UI/UX", "Education"],
  },
  {
    id: "castor-branding",
    title: "Castor Oil Branding",
    category: "Branding",
    description: "Complete brand identity and packaging design for natural products",
    image: "/images/projects/castor-branding.jpg",
    tags: ["Branding", "Logo Design", "Packaging"],
  },
  {
    id: "flint-ecommerce",
    title: "Flint Ecommerce",
    category: "Web Development",
    description: "High-performance e-commerce platform with custom features",
    image: "/images/projects/flint-ecommerce.jpg",
    tags: ["E-commerce", "Web Development", "UI/UX"],
  },
  {
    id: "royal-haven",
    title: "Royal Haven Website",
    category: "Web Development",
    description: "Luxury real estate website showcasing premium properties",
    image: "/images/projects/royal-haven.jpg",
    tags: ["Web Design", "Real Estate", "Luxury"],
  },
  {
    id: "mobile-ui",
    title: "Mobile UI Design",
    category: "UI/UX",
    description: "Modern mobile application interface with seamless user experience",
    image: "/images/projects/mobile-ui.jpg",
    tags: ["UI/UX", "Mobile", "App Design"],
  },
  {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Social Media",
    description: "Engaging social media content and campaign strategy",
    image: "/images/projects/social-campaign.jpg",
    tags: ["Social Media", "Marketing", "Content"],
  },
];

export const categories = ["All", "Web Development", "Branding", "UI/UX", "Social Media"];
