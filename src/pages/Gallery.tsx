import GalleryCard from '../components/cards/GalleryCard';
import CTASection from '../components/sections/CTASection';
import { images } from '../utils/images';

const Gallery = () => {
  const galleryItems = [
    { 
      imageUrl: images.gallery1, 
      title: 'Mariage Traditionnel Baoulé', 
      category: 'Mariage Traditionnel' 
    },
    { 
      imageUrl: images.gallery2, 
      title: 'Réception Luxe à Abidjan', 
      category: 'Réception VIP' 
    },
    { 
      imageUrl: images.gallery3, 
      title: 'Décoration Florale Premium', 
      category: 'Décoration' 
    },
    { 
      imageUrl: images.gallery4, 
      title: 'Table d\'Honneur Élégante', 
      category: 'Réception' 
    },
    { 
      imageUrl: images.gallery5, 
      title: 'Wedding Cake Design', 
      category: 'Gastronomie' 
    },
    { 
      imageUrl: images.gallery6, 
      title: 'Couple de Mariés', 
      category: 'Mariage' 
    },
    { 
      imageUrl: images.gallery7, 
      title: 'Centre de Table Luxe', 
      category: 'Décoration' 
    },
    { 
      imageUrl: images.gallery8, 
      title: 'Salle de Réception Prestige', 
      category: 'Lieu' 
    },
    { 
      imageUrl: images.gallery9, 
      title: 'Détails Dorés Raffinés', 
      category: 'Détails' 
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-4">
            Galerie de Réalisations
          </h1>
          <p className="font-cormorant text-xl text-[#2C2C2C]/70 max-w-3xl mx-auto">
            Découvrez quelques-uns des moments magiques que nous avons eu le privilège de créer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default Gallery;