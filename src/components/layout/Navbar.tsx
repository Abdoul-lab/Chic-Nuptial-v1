import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 bg-[#FFFFF0]/95 backdrop-blur border-b border-[#F7E7CE]/50"
      aria-label="Navigation principale"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold text-[#CFB53B] font-playfair tracking-tight md:text-3xl">
          CHIC NUPTIAL
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-cormorant text-lg transition-all duration-300 border-b-2 pb-1 ${
                location.pathname === link.path
                  ? 'border-[#CFB53B] text-[#CFB53B]'
                  : 'border-transparent text-[#2C2C2C] hover:border-[#CFB53B]/70 hover:text-[#CFB53B]'
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F7E7CE]/50 bg-white text-[#2C2C2C] transition hover:border-[#CFB53B]/70 hover:bg-[#F7E7CE]/70 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#F7E7CE]/50 bg-[#FFFFF0] px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block rounded-xl px-4 py-3 text-lg font-cormorant transition-colors ${
                location.pathname === link.path ? 'text-[#CFB53B]' : 'text-[#2C2C2C] hover:bg-[#F7E7CE]/50 hover:text-[#CFB53B]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;