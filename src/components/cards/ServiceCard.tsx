import { ArrowUpRight, Brush, Crown, Flower2, Gem, Handshake, Shirt, Sparkles } from 'lucide-react';
import { images } from '../../utils/images';

interface ServiceCardProps {
  title: string;
  description: string;
  priceRange: string;
  imageIndex?: number;
}

const serviceImages = [
  images.gallery1,
  images.gallery2,
  images.gallery3,
  images.gallery4,
  images.gallery5,
  images.gallery6,
  images.gallery7,
  images.gallery8,
];

const serviceIcons = [Crown, Shirt, Flower2, Gem, Sparkles, Gem, Brush, Handshake];

const ServiceCard = ({ title, description, priceRange, imageIndex = 0 }: ServiceCardProps) => {
  const safeIndex = Math.abs(imageIndex) % serviceImages.length;
  const imageUrl = serviceImages[safeIndex];
  const Icon = serviceIcons[safeIndex];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-[#E7DCCB] bg-white shadow-[0_14px_38px_rgba(181,138,74,0.1)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(181,138,74,0.2)]">
      <div className="relative h-52 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.src = images.hero;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E1D]/75 via-[#4A2E1D]/10 to-transparent" />
        <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-[#B58A4A] shadow-lg backdrop-blur">
          <Icon size={24} strokeWidth={1.8} />
        </span>
        <span className="absolute bottom-4 left-5 rounded-full border border-white/40 bg-white/15 px-3 py-1 font-montserrat text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
          Chic Nuptial
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-playfair text-2xl leading-tight text-[#4A2E1D]">{title}</h3>
        <p className="mt-3 flex-1 font-montserrat text-sm leading-6 text-[#6E6258]">{description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-[#E7DCCB] pt-4">
          <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#B58A4A]">
            {priceRange}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF4E6] text-[#F06A10] transition group-hover:bg-[#F06A10] group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
