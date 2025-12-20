export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "atli-institute",
    title: "ATLI Institute",
    category: "Web Development",
    description: "Educational institution website with modern design and intuitive navigation",
    image: "/images/atli-institute.jpg",
    tags: ["Web Design", "UI/UX", "Education"],
    demoUrl: "https://atlinstitute.org/",
  },
  {
    id: "castor-branding",
    title: "Castor Oil Branding",
    category: "Branding",
    description: "Complete brand identity and packaging design for natural products",
    image: "/images/castor-oil-branding.jpg",
    tags: ["Branding", "Logo Design", "Packaging"],
    demoUrl: "/images/castor-brand-guide.pdf",
  },
  {
    id: "flint-ecommerce",
    title: "Flint Ecommerce",
    category: "Web Development",
    description: "High-performance e-commerce platform with custom features",
    image: "/images/flint-ecommerce.jpg",
    tags: ["E-commerce", "Web Development", "UI/UX"],
    demoUrl: "https://flint-clothing-shop-jb87-zeta.vercel.app/",
  },
  {
    id: "royal-haven",
    title: "Royal Haven Website",
    category: "Web Development",
    description: "Luxury real estate website showcasing premium properties",
    image: "/images/royal-haven.png",
    tags: ["Web Design", "Real Estate", "Luxury"],
    demoUrl: "#",
  },
  {
    id: "mobile-ui",
    title: "Mobile UI Design",
    category: "UI/UX",
    description: "Modern mobile application interface with seamless user experience",
    image: "/images/mobile-ui.jpg",
    tags: ["UI/UX", "Mobile", "App Design"],
    demoUrl: "#",
  },
  {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    category: "Social Media",
    description: "Engaging social media content and campaign strategy",
    image: "/images/7-generations-institute-storyboard.jpg",
    tags: ["Social Media", "Marketing", "Content"],
    demoUrl: "#",
  },
];

export const categories = ["All", "Web Development", "Branding", "UI/UX", "Social Media"];
