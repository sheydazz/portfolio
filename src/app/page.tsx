"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, ExternalLink, Mail, MessageCircle, Code2, Smartphone, Database, Palette, Globe, Zap, Bird, FileCode } from "lucide-react";

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

  // Datos del portafolio
  const projects = [
    {
      id: 1,
      title: "AyForms",
      description: "Web platform that integrates artificial intelligence with Google Forms.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      type: "Web",
      image: "",
      link: "#"
    },
    {
      id: 2,
      title: "Software Engineering Parametric Calculator",
      description: "Web application for parametric calculations in software engineering, enabling efficient estimation and analysis.",
      tech: ["React", "JavaScript"],
      type: "Web",
      image: "📊",
      link: "#"
    },
    {
      id: 3,
      title: "WhatsCooking",
      description: "Mobile app that finds recipes based on available ingredients, offering suggestions and cooking instructions.",
      tech: ["React Native", "TypeScript"],
      type: "Mobile",
      image: "🍳",
      link: "#"
    }
  ];

  const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "text-blue-500" },
    { name: "React Native", logo: "https://reactnative.dev/img/header_logo.svg", color: "text-purple-500" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "text-blue-600" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "text-yellow-500" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "text-green-600" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", color: "text-red-500" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "text-cyan-500" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", color: "text-pink-500" }
  ];


  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sheyla-daza-tobias", color: "bg-blue-600 hover:bg-blue-700" },
    { name: "GitHub", icon: Github, url: "https://github.com/sheydazz", color: "bg-gray-800 hover:bg-gray-900" },
    { name: "Fiverr", icon: ExternalLink, url: "https://www.fiverr.com/s/Eg4bZqY", color: "bg-green-600 hover:bg-green-700" }
  ];

  return (
    <div className="bg-gradient-to-r from-green-100 via-yellow-50 to-pink-100 min-h-screen relative">

      {/* Navbar*/}
      <nav className={`fixed top-0 left-0 right-0 m-10 mx-auto max-w-2xl z-50 flex flex-row gap-6 font-bold text-green-800 p-4 rounded-2xl justify-center items-center transition-all duration-300 ${IsScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
        <button className="hover:bg-white/100 active:bg-white/90 bg-white/50 px-4 py-2 rounded-xl text-sm text-center transition-colors border-0 h-10">
          About
        </button>
        <button className="hover:bg-white/100 active:bg-white/90 bg-white/50 px-4 py-2 rounded-xl text-sm text-center transition-colors border-0 h-10">
          Projects
        </button>
        <button className="hover:bg-white/100 active:bg-white/90 bg-white/50 px-4 py-2 rounded-xl text-sm text-center transition-colors border-0 h-10">
          Technologies
        </button>
        <button className="hover:bg-white/100 active:bg-white/90 bg-white/50 px-4 py-2 rounded-xl text-sm text-center transition-colors border-0 h-10">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <div className="mb-10 mt-30">
            <div className="relative w-48 h-48 rounded-full mx-auto mb-6 bg-gradient-to-br from-pink-400 to-purple-600 p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/assets/profesionalpicture.PNG"
                  alt="profileimage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-pink-800 mb-4 leading-tight">
              I'm Sheyla Daza
            </h1>
            <h2 className="text-2xl md:text-3xl text-green-800 font-semibold mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Frontend Developer with experience in creating web and mobile applications. Specialized in React, React Native, and modern technologies. Currently studying Systems Engineering, with a Diploma in Web Development with a focus on AI, and a Technical degree in Systems.

            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 flex items-center gap-2`}
                  >
                    <IconComponent size={20} />
                    {social.name}
                  </a>
                );
              })}
            </div>

            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              my projects↓
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My projects
            </h2>
            <p className="text-gray-600 text-xl">
              Innovative solutions I have developed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="text-6xl mb-4 text-center">
                    {project.image}
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${project.type === 'Web' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                    {project.type}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold text-sm hover:from-green-500 hover:to-blue-600 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    Ver proyecto
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Technologies I work with
            </h2>
            <p className="text-gray-600 text-xl">
              tech stack I use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                  <div className={`mb-4 ${tech.color} transition-all duration-300 group-hover:scale-110 flex justify-center`}>
                    <Image src={tech.logo} width={48} height={48} alt="logo"></Image>
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg">
                    {tech.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Shall we work together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            I’m available for freelance projects and job opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sheyladazat@gmail.com"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              📧 Send email
            </a>
            <a
              href="https://wa.link/0xeif6"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-gray-400">
          © 2024 Sheyla Daza - Frontend Developer. Built with 💜 and React
        </p>
      </footer>
    </div>
  );
}