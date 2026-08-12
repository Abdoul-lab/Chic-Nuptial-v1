import GalleryCard from '../components/cards/GalleryCard';
import CTASection from '../components/sections/CTASection';
import { GALLERY_ITEMS } from '../data/content';
import PageHeader from '../components/common/PageHeader';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-[8rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader eyebrow="Inspirations" title="Galerie de réalisations" description="Découvrez quelques-uns des moments magiques que nous avons eu le privilège de créer." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default Gallery;
