import { Star } from 'lucide-react';

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
    <section className="py-20 bg-[#FFFFF0]">
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
              className="bg-white p-8 rounded-2xl border border-[#F7E7CE]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#CFB53B] fill-current" />
                ))}
              </div>
              
              <p className="font-cormorant text-lg text-[#2C2C2C]/80 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-[#F7E7CE]/30 pt-4">
                <p className="font-playfair text-lg text-[#2C2C2C]">{testimonial.name}</p>
                <p className="font-cormorant text-sm text-[#CFB53B]">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;