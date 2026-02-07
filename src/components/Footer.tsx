import { Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-red-600 to-red-500 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo ohne Quadrat, nur mit dezentem Schatten für Sichtbarkeit */}
              <img 
                src="/image.png" 
                alt="ASKÖ Volley Juniors Logo" 
                className="h-14 w-14 object-contain drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]" 
              />
              <div>
                <h3 className="text-lg font-bold text-white">ASKÖ Volley Juniors</h3>
                <p className="text-sm text-white/90">Salzburg</p>
              </div>
            </div>
            <p className="text-white/95 text-sm leading-relaxed">
              Volleyball für Kids & Teens – 
              mit Spaß, Teamgeist und professioneller Betreuung.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Schnellzugriff</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white hover:text-white/80 transition-colors text-sm">
                  Über Uns
                </a>
              </li>
              <li>
                <a href="#training" className="text-white hover:text-white/80 transition-colors text-sm">
                  Training & Angebote
                </a>
              </li>
              <li>
                <a href="#team" className="text-white hover:text-white/80 transition-colors text-sm">
                  Trainerteam
                </a>
              </li>
              <li>
                <a href="#registration" className="text-white hover:text-white/80 transition-colors text-sm">
                  Anmeldung
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/90">Sporthalle Salzburg-Süd</li>
              <li className="text-white/90">Alpenstraße 107</li>
              <li className="text-white/90">5020 Salzburg</li>
              <li>
                <a
                  href="mailto:info@volley-juniors-salzburg.at"
                  className="text-white hover:text-white/80 transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@volley-juniors-salzburg.at
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Folge uns</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-white/90 text-sm">
              Bleibe auf dem Laufenden über Training, Events und Erfolge!
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/90 text-sm text-center md:text-left">
              © {currentYear} ASKÖ Volley Juniors Salzburg. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/imprint" className="text-white hover:text-white/80 transition-colors">
                Impressum
              </Link>
              <span className="text-white/30">|</span>
              <Link to="/privacy" className="text-white hover:text-white/80 transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}