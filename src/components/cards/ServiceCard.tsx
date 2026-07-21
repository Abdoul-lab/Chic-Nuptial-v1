interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  priceRange: string;
}

const ServiceCard = ({ icon, title, description, priceRange }: ServiceCardProps) => {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-[#F7E7CE]/30 hover:border-[#CFB53B]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className="w-16 h-16 bg-[#CFB53B]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#CFB53B]/20 transition-colors text-3xl">
        {icon}
      </div>
      
      <h3 className="font-playfair text-2xl text-[#2C2C2C] mb-4">{title}</h3>
      <p className="font-cormorant text-lg text-[#2C2C2C]/70 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="pt-6 border-t border-[#F7E7CE]/30">
        <p className="font-cormorant text-xl text-[#CFB53B] font-semibold">
          {priceRange}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;