import Image from "next/image";
import { Technology } from "@/types";

interface TechnologiesSectionProps {
  technologies: Technology[];
}

export default function TechnologiesSection({ technologies }: TechnologiesSectionProps) {
  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technologies I work with
          </h2>
          <p className="text-gray-600 text-xl">
            tech stack I use
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {technologies.map((tech, index) => {
            return (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group">
                <div className={`mb-2 ${tech.color} transition-all duration-300 group-hover:scale-110 flex justify-center`}>
                  <Image src={tech.logo} width={32} height={32} alt="logo"></Image>
                </div>
                <h4 className="font-semibold text-gray-800 text-xs">
                  {tech.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
