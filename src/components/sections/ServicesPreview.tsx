import ServiceCard from '../cards/ServiceCard';
import CTAButton from '../common/CTAButton';
import { SERVICES } from '../../data/content';

const ServicesPreview = () => {
  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-4">
            Nos services
          </h2>
          <p className="font-cormorant text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Robes de mariée, robes de soirée, location de tenues, décorations, dragées personnalisées et bien plus encore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              priceRange={service.priceRange}
              imageIndex={index}
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
