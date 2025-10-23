import Image from "next/image";
import { SocialLink } from "@/types";

interface HeroSectionProps {
  socialLinks: SocialLink[];
  onNavigate: (sectionId: string) => void;
}

export default function HeroSection({ socialLinks, onNavigate }: HeroSectionProps) {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4">
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
            Software Developer
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Software Developer with experience in creating web and mobile applications. Specialized in React, React Native, and modern technologies. Currently studying Systems Engineering, with a Diploma in Web Development with a focus on AI, and a Technical degree in Systems.
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

          <button 
            onClick={() => onNavigate('projects')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 cursor-pointer"
          >
            my projects↓
          </button>
        </div>
      </div>
    </section>
  );
}
