import ServiceCard from '../cards/ServiceCard';
import CTAButton from '../common/CTAButton';

const ServicesPreview = () => {
  const services = [
    {
      icon: "💝",
      title: "Organisation de Mariages",
      description: "Des cérémonies qui reflètent votre amour avec une touche d'élégance africaine",
      priceRange: "À partir de 2 500 000 FCFA"
    },
    {
      icon: "✨",
      title: "Décoration Premium",
      description: "Ambiances luxueuses mêlant tradition et modernité",
      priceRange: "À partir de 1 500 000 FCFA"
    },
    {
      icon: "🍽️",
      title: "Service Traiteur",
      description: "Gastronomie raffinée aux saveurs authentiques",
      priceRange: "À partir de 800 000 FCFA"
    },
    {
      icon: "🎵",
      title: "Animation & Ambiance",
      description: "Artistes talentueux pour une atmosphère inoubliable",
      priceRange: "À partir de 1 200 000 FCFA"
    },
    {
      icon: "📸",
      title: "Photo & Vidéo",
      description: "Capturez chaque instant magique de votre événement",
      priceRange: "À partir de 900 000 FCFA"
    },
    {
      icon: "🎁",
      title: "Service Conciergerie",
      description: "Une expérience sans souci pour vos invités",
      priceRange: "À partir de 500 000 FCFA"
    }
  ];

  return (
    <section className="py-20 bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-4">
            Nos Services d'Excellence
          </h2>
          <p className="font-cormorant text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Une gamme complète de services pour créer l'événement de vos rêves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              priceRange={service.priceRange}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton text="Voir tous nos services" link="/services" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;