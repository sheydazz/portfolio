export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  type: "Web" | "Mobile";
  image: string;
  link: string;
}

export interface Technology {
  name: string;
  logo: string;
  color: string;
}

export interface SocialLink {
  name: string;
  icon: any; // Lucide icon component
  url: string;
  color: string;
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}
