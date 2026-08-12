import { Gem, HeartHandshake, Sparkles, Truck, WandSparkles } from 'lucide-react';

const advantages = [
  { title: 'Collections exclusives', Icon: Sparkles },
  { title: 'Accompagnement sur-mesure', Icon: HeartHandshake },
  { title: 'Livraison rapide', Icon: Truck },
  { title: 'Location d’articles', Icon: WandSparkles },
  { title: 'Qualité premium', Icon: Gem },
];

const Advantages = () => (
  <section className="py-8">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-5">
        {advantages.map(({ title, Icon }) => (
          <div key={title} className="group rounded-2xl border border-[#E7DCCB] bg-white/70 px-4 py-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_28px_rgba(181,138,74,0.12)]">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#B58A4A]/10 text-[#B58A4A] transition group-hover:bg-[#B58A4A] group-hover:text-white">
              <Icon size={23} strokeWidth={1.8} />
            </span>
            <p className="mt-3 text-sm font-semibold leading-5 text-[#4A2E1D]">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Advantages;
