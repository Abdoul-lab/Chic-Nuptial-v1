interface GalleryCardProps {
  imageUrl: string;
  title: string;
  category: string;
}

const GalleryCard = ({ imageUrl, title, category }: GalleryCardProps) => {
  return (
    <div className="group relative card-surface aspect-[4/5] overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          const target = e.currentTarget;
          target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=60';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E1D]/75 via-transparent to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[#F5EFE5] text-sm mb-2">{category}</p>
          <h3 className="text-[#FFFFFF] font-playfair text-xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
