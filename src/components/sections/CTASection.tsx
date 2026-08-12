import CTAButton from '../common/CTAButton';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../data/content';

const CTASection = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-[#2C2C2C] to-[#2C2C2C]/90">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-[#FFFFFF] mb-6">
          Prêt à Créer un Événement
          <br />
          <span className="text-[#CFB53B]">Inoubliable</span> ?
        </h2>
        <p className="font-montserrat text-xl text-[#F7E7CE]/80 mb-10 max-w-2xl mx-auto">
          Laissez-nous transformer votre vision en une réalité époustouflante.
          Contactez-nous dès aujourd'hui pour une consultation personnalisée.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <CTAButton
            text="Demander un devis gratuit"
            link="/contact"
            className="bg-[#F06A10] text-[#FFFFFF] hover:bg-[#c85b0e] shadow-lg shadow-[#F06A10]/30"
          />
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-montserrat font-semibold text-lg shadow-lg shadow-[#25D366]/30 transition-all duration-300 transform hover:scale-105 hover:bg-[#1ebe5d]"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
