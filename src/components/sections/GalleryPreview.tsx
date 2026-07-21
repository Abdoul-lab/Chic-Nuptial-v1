import GalleryCard from '../cards/GalleryCard';
import CTAButton from '../common/CTAButton';
import { images } from '../../utils/images';

const GalleryPreview = () => {
  const galleryItems = [
    {
      imageUrl: images.gallery1,
      title: 'Mariage Traditionnel Baoulé',
      category: 'Mariage Traditionnel'
    },
    {
      imageUrl: images.gallery4,
      title: 'Table d\'Honneur Élégante',
      category: 'Réception'
    },
    {
      imageUrl: images.gallery9,
      title: 'Détails Dorés Raffinés',
      category: 'Détails'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFFF0] to-[#F7E7CE]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-4">
            Galerie de Réalisations
          </h2>
          <p className="font-cormorant text-xl text-[#2C2C2C]/70">
            Quelques moments magiques que nous avons créés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton text="Voir toute la galerie" link="/galerie" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;