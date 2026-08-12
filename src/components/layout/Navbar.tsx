import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: '/', label: 'ACCUEIL' },
  { to: '/a-propos', label: 'À PROPOS' },
  { to: '/services', label: 'NOS SERVICES' },
  { to: '/galerie', label: 'GALERIE' },
  { to: '/contact', label: 'CONTACT' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="fixed inset-x-0 top-10 z-40 bg-transparent border-b border-transparent shadow-none backdrop-blur-sm"
      aria-label="Navigation principale"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="CHIC NUPTIAL" className="h-12 md:h-14 object-contain" />
          <div className="hidden sm:flex flex-col">
            <span className="inline-flex items-center gap-2 text-2xl leading-none tracking-[0.2em]" style={{ fontFamily: 'Monotype Corsiva, cursive' }}>
              <span className="italic text-[#f06a10]">
                Chic
              </span>
              <span className="text-[#d4a557]" aria-hidden="true">
                <svg viewBox="0 0 40 24" className="h-6 w-6" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gold-ring-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f8d47c" />
                      <stop offset="50%" stopColor="#d4a557" />
                      <stop offset="100%" stopColor="#f2c94c" />
                    </linearGradient>
                  </defs>
                  <circle cx="13" cy="12" r="7" stroke="url(#gold-ring-gradient)" strokeWidth="3" />
                  <circle cx="23" cy="12" r="7" stroke="url(#gold-ring-gradient)" strokeWidth="3" />
                  <path d="M10 9 C12 4, 20 4, 22 9" stroke="url(#gold-ring-gradient)" strokeWidth="3" fill="none" />
                </svg>
              </span>
              <span className="italic text-[#4A2E1D]">
                Nuptial
              </span>
            </span>
            <span className="mt-0 block whitespace-nowrap text-[0.75rem] leading-none lowercase tracking-[0.22em] text-[#6E6258]">
              votre événement,
              <span className="text-[#7B4D25]"> notre style</span>
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-montserrat text-lg transition-transform duration-300 transform border-b-2 pb-1 ${
                location.pathname === link.to
                  ? 'border-[#B58A4A] text-[#B58A4A]'
                  : 'border-transparent text-[#4A2E1D] hover:border-[#B58A4A]/80 hover:text-[#B58A4A] hover:-translate-y-0.5 hover:scale-105'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E7DCCB] bg-white text-[#4A2E1D] transition-transform duration-200 transform hover:scale-105 hover:border-[#B58A4A]/70 md:hidden focus:outline-none focus:ring-2 focus:ring-[#B58A4A]/30"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`md:hidden border-t border-[#E7DCCB] bg-[#FFFFFF] px-4 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setIsOpen(false)}
            className={`block rounded-xl px-4 py-3 text-lg font-montserrat transition-colors ${
              location.pathname === link.to ? 'text-[#B58A4A]' : 'text-[#4A2E1D] hover:bg-[#FAF8F3] hover:text-[#B58A4A]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
