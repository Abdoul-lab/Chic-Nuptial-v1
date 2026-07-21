import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-[#FFFFF0] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Section 1 */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#CFB53B] mb-4">
              CHIC NUPTIAL
            </h3>
            <p className="font-cormorant text-base leading-7 text-[#FFFFF0]/90">
              L'excellence de l'événementiel africain à Abidjan
            </p>
          </div>

          {/* Section 2 - Contact */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-[#CFB53B] mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#CFB53B]" />
                <span className="font-cormorant text-base">+225 07 07 07 07 07</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#CFB53B]" />
                <span className="font-cormorant text-base">contact@chicnuptial.ci</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#CFB53B]" />
                <span className="font-cormorant text-base">Cocody, Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
          </div>

          {/* Section 3 - Réseaux sociaux */}
          <div>
            <h4 className="font-playfair text-xl font-semibold text-[#CFB53B] mb-4">
              Suivez-nous
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-base transition-colors hover:text-[#CFB53B]">
                📸 Instagram
              </a>
              <a href="#" className="text-base transition-colors hover:text-[#CFB53B]">
                👥 Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[#F7E7CE]/20 pt-8 text-center">
          <p className="font-cormorant text-sm text-[#FFFFF0]/70">
            © 2024 CHIC NUPTIAL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;