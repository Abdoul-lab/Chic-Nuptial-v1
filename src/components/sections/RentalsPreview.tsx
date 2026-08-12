import CTAButton from '../common/CTAButton';
import RentalCard from '../cards/RentalCard';
import { RENTALS } from '../../data/content';

const RentalsPreview = () => {
  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-4">Nos articles en location</h2>
          <p className="font-cormorant text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            Découvrez notre sélection d’articles haut de gamme disponibles à la location pour votre événement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RENTALS.map((item, index) => (
            <RentalCard key={item.title} {...item} imageIndex={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton text="Découvrir nos collections" link="/services" className="px-10 py-4" />
        </div>
      </div>
    </section>
  );
};

export default RentalsPreview;
