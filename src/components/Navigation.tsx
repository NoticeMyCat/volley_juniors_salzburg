import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sperrt das Scrollen des Hintergrunds, wenn das Menü offen ist
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Wir definieren hier direkt die Ziel-Links
  const menuItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'Über Uns', href: '/#about' },
    { id: 'training', label: 'Training & Angebote', href: '/#training' },
    { id: 'team', label: 'Trainerteam', href: '/#team' },
    { id: 'sponsoring', label: 'Sponsoring', href: '/#sponsoring' },
    { id: 'registration', label: 'Anmeldung', href: '/#registration' },
    { id: 'contact', label: 'Kontakt', href: '/#contact' }, // Oder mailto:..., falls gewünscht
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative z-[110]"> 
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img src="./image.png" alt="ASKÖ Volley Juniors Logo" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-base lg:text-lg font-bold text-gray-900 leading-tight whitespace-nowrap">
                ASKÖ Volley Juniors
              </h1>
              <p className="text-xs lg:text-sm text-red-600 font-medium">Salzburg</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} className="text-red-600" /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[105] flex flex-col pt-24">
          <div className="flex-1 flex flex-col items-center justify-start px-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                // WICHTIG: Das hier schließt das Menü beim Klicken
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-full text-center text-xl font-bold text-gray-800 hover:text-red-600 hover:bg-red-50 transition-all py-5 border-b border-gray-50 last:border-none"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}