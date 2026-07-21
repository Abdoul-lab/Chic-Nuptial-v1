import CTAButton from '../common/CTAButton';
import { MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2C2C2C] to-[#2C2C2C]/90">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-[#FFFFF0] mb-6">
          Prêt à Créer un Événement
          <br />
          <span className="text-[#CFB53B]">Inoubliable</span> ?
        </h2>
        <p className="font-cormorant text-xl text-[#F7E7CE]/80 mb-10 max-w-2xl mx-auto">
          Laissez-nous transformer votre vision en une réalité époustouflante. 
          Contactez-nous dès aujourd'hui pour une consultation personnalisée.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <CTAButton text="Demander un devis gratuit" link="/contact" />
          <a
            href="https://wa.me/+2250707070707"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-green-500 text-green-500 font-cormorant text-lg rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
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