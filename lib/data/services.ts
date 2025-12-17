export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "brand-identities",
    title: "Brand Identities",
    description: "Create memorable brands that stand out in the market",
    icon: "palette",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
    ],
  },
  {
    id: "web-design",
    title: "Website / App Design",
    description: "Beautiful, functional digital experiences that convert",
    icon: "monitor",
    features: [
      "UI/UX Design",
      "Responsive Design",
      "Prototyping",
      "User Research",
    ],
  },
  {
    id: "art-direction",
    title: "Art Direction",
    description: "Creative vision that drives measurable results",
    icon: "compass",
    features: [
      "Creative Strategy",
      "Visual Storytelling",
      "Campaign Design",
      "Brand Photography",
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "Robust, scalable web solutions built for growth",
    icon: "code",
    features: [
      "Full-Stack Development",
      "E-commerce Solutions",
      "CMS Integration",
      "Performance Optimization",
    ],
  },
];
