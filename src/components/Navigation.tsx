import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Verhindert das Scrollen des Hintergrunds, wenn das mobile Menü offen ist
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);
  
  // Keine Pixel-Berechnung mehr. Der Browser macht das jetzt selbst.
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Menü sofort schließen

    // Spezialfall: Wenn "Home" geklickt wird, einfach ganz nach oben
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Wenn wir nicht auf der Startseite sind, navigieren wir erst dorthin
    if (location.pathname !== '/') {
        window.location.href = `/#${id}`;
        return;
    }

    const element = document.getElementById(id);
    if (element) {
      // scrollIntoView nutzt automatisch dein 'scroll-mt-28' aus der Home.tsx
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Über Uns' },
    { id: 'training', label: 'Training & Angebote' }, 
    { id: 'team', label: 'Team' },
    { id: 'sponsoring', label: 'Sponsoring' },
    { id: 'registration', label: 'Anmeldung' },
    { id: 'contact', label: 'Kontakt' },
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
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }} 
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
          <div className="hidden lg:flex space-x-1 items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    item.id === 'contact' 
                    ? 'bg-red-600 text-white hover:bg-red-700 ml-2' // Kontakt Button hervorheben
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} className="text-red-600" /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[105] flex flex-col pt-24">
          <div className="flex-1 flex flex-col items-center justify-start px-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-center text-xl font-bold transition-all py-5 border-b border-gray-50 last:border-none ${
                    item.id === 'contact'
                    ? 'text-red-600 hover:bg-red-50'
                    : 'text-gray-800 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}