"use client"
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { projects, technologies, socialLinks, photos } from "@/data/portfolioData";

export default function Home() {
  const [IsScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para navegación suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-100 via-yellow-50 to-pink-100 min-h-screen relative">
      <Navbar isScrolled={IsScrolled} onNavigate={scrollToSection} />
      <HeroSection socialLinks={socialLinks} onNavigate={scrollToSection} />
      <ProjectsSection projects={projects} />
      <TechnologiesSection technologies={technologies} />
      <PhotoCarousel photos={photos} />
      <ContactSection />
      <Footer />
    </div>
  );
}