import { Award, BadgeCheck, HeartHandshake, ShieldCheck } from 'lucide-react';

const reassuranceItems = [
  { text: 'Plus de 500 clients satisfaits', Icon: HeartHandshake },
  { text: 'Produits de qualité supérieure', Icon: BadgeCheck },
  { text: 'Savoir-faire et élégance', Icon: Award },
  { text: 'Support client dédié', Icon: ShieldCheck },
];

const Reassurance = () => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#FAF8F3] rounded-xl p-6">
          {reassuranceItems.map(({ text, Icon }) => (
            <div key={text} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B58A4A]/10 text-[#B58A4A] transition-transform duration-200 hover:scale-110">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <div className="text-sm font-semibold text-[#4A2E1D]">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reassurance;
