import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aïssata & Koffi',
      event: 'Mariage - Décembre 2024',
      text: "Chic Nuptial a surpassé toutes nos attentes. Notre mariage était tout simplement magique. L'équipe a su capturer l'essence de notre amour avec une élégance typiquement africaine.",
      rating: 5
    },
    {
      name: 'Fatou & Ibrahim',
      event: 'Mariage Traditionnel - Novembre 2024',
      text: "Un service impeccable du début à la fin. La décoration était somptueuse, le repas exquis. Nos invités n'ont pas tari d'éloges. Merci pour ce moment inoubliable !",
      rating: 5
    },
    {
      name: 'Marie & Jean-Paul',
      event: 'Réception VIP - Janvier 2025',
      text: "Professionnalisme et créativité sont les mots qui définissent Chic Nuptial. Ils ont transformé notre vision en une réalité encore plus belle que nos rêves.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2C2C2C] mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="font-cormorant text-xl text-[#2C2C2C]/70">
            Témoignages de nos clients prestigieux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[1.75rem] border border-[#E7DCCB] bg-white p-8 shadow-[0_14px_38px_rgba(181,138,74,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(181,138,74,0.16)]"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-[#B58A4A]/10" aria-hidden="true" />
              <div className="flex mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#CFB53B] fill-current" />
                ))}
              </div>
              
              <p className="font-cormorant text-lg text-[#2C2C2C]/80 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 border-t border-[#E7DCCB] pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4E6] font-playfair text-sm text-[#B58A4A]">{testimonial.name.split(' ').map((part) => part[0]).join('')}</span>
                <div><p className="font-playfair text-lg text-[#2C2C2C]">{testimonial.name}</p>
                <p className="font-cormorant text-sm text-[#CFB53B]">{testimonial.event}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
