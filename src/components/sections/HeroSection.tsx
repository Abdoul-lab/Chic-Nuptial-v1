import { Link } from 'react-router-dom';
import CTAButton from '../common/CTAButton';

const categories = ['Robes', 'Accessoires', 'Décoration', 'Maquillage'];

const HeroSection = () => (
  <section className="relative overflow-hidden pt-[3rem] md:pt-[2.75rem]">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="text-center text-[#4A2E1D] sm:text-left">
          <p className="mb-4 font-montserrat text-sm uppercase tracking-[0.4em] text-[#4A2E1D]/70">
            Mariages · Fêtes · Événements professionnels
          </p>
          <h1 className="font-playfair text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Bienvenue chez CHIC NUPTIAL <span className="mt-4 font-playfair text-xl italic text-[#4A2E1D]/80 sm:mt-6">
            Nous faisons de Votre événement, notre style.
          </span>
          </h1>
          
          <p className="mt-6 max-w-xl font-montserrat text-base leading-8 text-[#4A2E1D]/80">
            Nous sommes spécialisées dans l'univers du mariage et des événements. Nous vous accompagnons avec élégance pour faire de chaque célébration un moment inoubliable.
          </p>
          <div className="mt-8 sm:mt-10">
            <CTAButton text="DÉCOUVRIR NOTRE BOUTIQUE" link="/services" className="bg-[#B58A4A] text-[#FAF8F3] shadow-lg shadow-[#B58A4A]/20 transition-transform duration-200 hover:-translate-y-1 hover:bg-[#9b7335]" />
          </div>
          <div className="mt-6 grid max-w-xl grid-cols-2 gap-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category}
                to="/services"
                className="rounded-2xl border border-[#F7E7CE]/80 bg-white/90 px-3 py-4 text-center shadow-lg shadow-[#4A2E1D]/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#B58A4A]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4A2E1D]">{category}</p>
                <span className="mt-1 block text-[10px] text-[#B58A4A]">Découvrir</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative">
          <span className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#F8D47C]/25 blur-3xl" aria-hidden="true" />
          <img
            src="/hero-wedding-luxury.jpeg"
            alt="Réception de mariage Chic Nuptial"
            className="relative h-72 w-full rounded-[2rem] border border-[#F7E7CE] object-cover shadow-[0_30px_60px_rgba(74,46,29,0.25)] sm:h-[480px]"
          />
          <span className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#F06A10]/10 blur-2xl" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
