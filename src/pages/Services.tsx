import ServiceCard from '../components/cards/ServiceCard';
import CTASection from '../components/sections/CTASection';

const Services = () => {
  const services = [
    { icon: "💝", title: "Organisation de Mariages", description: "Cérémonies sur mesure reflétant votre histoire d'amour avec une touche d'élégance africaine", priceRange: "À partir de 2 500 000 FCFA" },
    { icon: "✨", title: "Décoration Premium", description: "Ambiances luxueuses mêlant tradition et modernité pour sublimer votre événement", priceRange: "À partir de 1 500 000 FCFA" },
    { icon: "🍽️", title: "Service Traiteur", description: "Gastronomie raffinée aux saveurs authentiques pour émerveiller vos convives", priceRange: "À partir de 800 000 FCFA" },
    { icon: "🎵", title: "Animation & Ambiance", description: "Artistes talentueux et animations sur mesure pour une atmosphère inoubliable", priceRange: "À partir de 1 200 000 FCFA" },
    { icon: "📸", title: "Photo & Vidéo", description: "Immortalisez chaque instant magique avec nos professionnels passionnés", priceRange: "À partir de 900 000 FCFA" },
    { icon: "🎁", title: "Conciergerie VIP", description: "Service personnalisé pour une expérience sans souci pour vous et vos invités", priceRange: "À partir de 500 000 FCFA" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-4">
            Nos Services Premium
          </h1>
          <p className="font-cormorant text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            Une gamme complète de services pour créer l'événement qui vous ressemble
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default Services;