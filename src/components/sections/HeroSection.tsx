import CTAButton from '../common/CTAButton';
import { images } from '../../utils/images';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Mariage africain luxueux"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            target.parentElement!.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #4A4A4A 100%)';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/80 to-[#2C2C2C]/50" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#FFFFF0] leading-tight">
            L'Excellence de
            <br />
            <span className="text-[#CFB53B]">l'Événementiel</span>
            <br />
            Africain
          </h1>
          
          <p className="font-cormorant text-xl md:text-2xl text-[#F7E7CE]/90 max-w-2xl mx-auto">
            Chic Nuptial sublime vos moments précieux avec élégance et raffinement. 
            Votre histoire, notre passion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <CTAButton text="Demander un devis" link="/contact" />
            <CTAButton text="Nos réalisations" link="/galerie" variant="secondary" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-[#F7E7CE]/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#CFB53B] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;