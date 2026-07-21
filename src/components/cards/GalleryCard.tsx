interface GalleryCardProps {
  imageUrl: string;
  title: string;
  category: string;
}

const GalleryCard = ({ imageUrl, title, category }: GalleryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          const target = e.currentTarget;
          target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=60';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[#F7E7CE] text-sm mb-2">{category}</p>
          <h3 className="text-[#FFFFF0] font-playfair text-xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;