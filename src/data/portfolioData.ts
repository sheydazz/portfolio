import { Github, Linkedin, ExternalLink } from "lucide-react";
import { Project, Technology, SocialLink, Photo } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "AyForms",
    description: "Web platform that integrates artificial intelligence with Google Forms.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    type: "Web",
    image: "",
    link: "https://eduquery-seven.vercel.app"
  },
  {
    id: 2,
    title: "Software Engineering Parametric Calculator",
    description: "Web application for parametric calculations in software engineering, enabling efficient estimation and analysis.",
    tech: ["React", "JavaScript"],
    type: "Web",
    image: "",
    link: "https://metricasdesoftware.vercel.app"
  },
  {
    id: 3,
    title: "WhatsCooking",
    description: "Mobile app that finds recipes based on available ingredients, offering suggestions and cooking instructions.",
    tech: ["React Native", "TypeScript"],
    type: "Mobile",
    image: "",
    link: "https://github.com/sheydazz/WhatsCooking"
  },
  {
    id: 4,
    title: "RestApp",
    description: "Mental health mobile application that integrates artificial intelligence to generate daily records, provide therapeutic activities, and send alerts to health specialists.",
    tech: ["Flutter", "Dart", "AI Integration"],
    type: "Mobile",
    image: "",
    link: "#"
  },
  {
    id: 5,
    title: "Refrielectricos",
    description: "Landing page for electronic refrigeration order management, integrated with WhatsApp to facilitate communication and order management.",
    tech: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    type: "Web",
    image: "",
    link: "https://refrielectricos.com"
  }
];

export const technologies: Technology[] = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "text-blue-500" },
  { name: "React Native", logo: "https://reactnative.dev/img/header_logo.svg", color: "text-purple-500" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "text-blue-600" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "text-yellow-500" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "text-green-600" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", color: "text-red-500" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "text-cyan-500" },
  { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", color: "text-blue-400" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "text-orange-500" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "text-blue-500" },
  { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", color: "text-pink-500" },
  {name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "text-black"},
  {name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "text-green-600"},
  {name:"NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", color: "text-red-500"},
  {name:"Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "text-gray-500"},
  {name:"PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "text-blue-500"},
  {name:"swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", color: "text-orange-500"},
  {name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "text-red-500"},
  {name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "text-blue-500"},
  {name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-plain.svg", color: "text-green-500"},
  {name: "wordpress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", color: "text-green-500"},
];

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sheyla-daza-tobias", color: "bg-blue-600 hover:bg-blue-700" },
  { name: "GitHub", icon: Github, url: "https://github.com/sheydazz", color: "bg-gray-800 hover:bg-gray-900" },
  { name: "Fiverr", icon: ExternalLink, url: "https://www.fiverr.com/s/Eg4bZqY", color: "bg-green-600 hover:bg-green-700" }
];

export const photos: Photo[] = [
  {
    id: 1,
    src: "/assets/profesionalpicture.PNG",
    alt: "Professional photo of Sheyla Daza",
    title: "Professional Headshot",
    description: "Professional headshot showcasing my professional appearance and confidence in the software development field."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    alt: "Coding workspace",
    title: "Development Environment",
    description: "My coding workspace where I spend hours developing innovative solutions and bringing ideas to life through code."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    alt: "Mobile app development",
    title: "Mobile Development",
    description: "Working on mobile applications using React Native and Flutter, creating cross-platform solutions for iOS and Android."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    alt: "Data analysis and AI",
    title: "AI & Data Science",
    description: "Exploring artificial intelligence and data science to create intelligent applications that solve real-world problems."
  },
  
];
