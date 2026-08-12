import { Armchair, ArrowUpRight, CakeSlice, Music2, Sofa, UtensilsCrossed } from 'lucide-react';
import { images } from '../../utils/images';

interface RentalCardProps {
  title: string;
  subtitle: string;
  imageIndex?: number;
}

const rentalImages = [images.rentalGold, images.galleryGreen, images.gallery8, images.gallery4, images.gallery7, images.gallery9];
const rentalIcons = [Armchair, UtensilsCrossed, Sofa, UtensilsCrossed, CakeSlice, Music2];

const RentalCard = ({ title, subtitle, imageIndex = 0 }: RentalCardProps) => {
  const safeIndex = Math.abs(imageIndex) % rentalImages.length;
  const Icon = rentalIcons[safeIndex];

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#E7DCCB] bg-white shadow-[0_14px_38px_rgba(181,138,74,0.1)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(181,138,74,0.2)]">
      <div className="relative h-40 overflow-hidden">
        <img
          src={rentalImages[safeIndex]}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.src = images.hero;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E1D]/75 to-transparent" />
        <span className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-[#B58A4A] shadow-lg">
          <Icon size={22} strokeWidth={1.8} />
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-2xl text-[#4A2E1D]">{title}</h3>
        <p className="mt-2 font-montserrat text-sm leading-6 text-[#6E6258]">{subtitle}</p>
        <div className="mt-5 flex items-center justify-between border-t border-[#E7DCCB] pt-4">
          <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B58A4A]">
            Disponible à la location
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF4E6] text-[#F06A10] transition group-hover:bg-[#F06A10] group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default RentalCard;
