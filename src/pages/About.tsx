import CTASection from '../components/sections/CTASection';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-4">
            À propos de CHIC NUPTIAL
          </h1>
          <p className="font-cormorant text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            L'excellence de l'événementiel africain au service de vos moments précieux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-playfair text-3xl text-[#2C2C2C] mb-6">Notre Histoire</h2>
            <div className="font-cormorant text-lg text-[#2C2C2C]/80 space-y-4 leading-relaxed">
              <p>
                CHIC NUPTIAL est née d'une passion pour l'élégance et le raffinement 
                dans l'organisation d'événements. Basée à Abidjan, notre entreprise 
                s'est imposée comme une référence dans le domaine de l'événementiel 
                haut de gamme en Côte d'Ivoire.
              </p>
              <p>
                Notre mission est de transformer chaque événement en une expérience 
                inoubliable, en mariant les traditions africaines avec les standards 
                internationaux du luxe.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#F7E7CE] to-[#CFB53B]/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-xl p-6">
                <p className="font-playfair text-3xl text-[#CFB53B] mb-2">500+</p>
                <p className="font-cormorant text-lg text-[#2C2C2C]">Événements réalisés</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="font-playfair text-3xl text-[#CFB53B] mb-2">10+</p>
                <p className="font-cormorant text-lg text-[#2C2C2C]">Ans d'expérience</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="font-playfair text-3xl text-[#CFB53B] mb-2">50+</p>
                <p className="font-cormorant text-lg text-[#2C2C2C]">Professionnels</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="font-playfair text-3xl text-[#CFB53B] mb-2">98%</p>
                <p className="font-cormorant text-lg text-[#2C2C2C]">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default About;