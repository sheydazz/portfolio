"use client";

interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ isScrolled, onNavigate }: NavbarProps) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 m-10 mx-auto max-w-2xl z-50 flex flex-row gap-6 font-bold text-green-800 p-4 rounded-2xl justify-center items-center transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      {navItems.map((item) => (
        <button 
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="hover:bg-white/100 active:bg-white/90 bg-white/50 px-4 py-2 rounded-xl text-sm text-center transition-colors border-0 h-10 cursor-pointer"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
