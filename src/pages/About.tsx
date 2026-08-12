import { Award, Gem, HeartHandshake, Sparkles } from 'lucide-react';
import CTASection from '../components/sections/CTASection';
import PageHeader from '../components/common/PageHeader';

const stats = [
  { value: '500+', label: 'Événements réalisés' },
  { value: '10+', label: "Ans d'expérience" },
  { value: '50+', label: 'Professionnels' },
  { value: '98%', label: 'Clients satisfaits' },
];

const values = [
  {
    Icon: Gem,
    title: 'Excellence',
    text: "Chaque détail est pensé avec exigence pour offrir un rendu irréprochable, du premier échange jusqu'au jour J.",
  },
  {
    Icon: HeartHandshake,
    title: 'Sur-mesure',
    text: 'Nos créations et nos décors s\'adaptent à votre histoire, à vos envies et à vos traditions, jamais l\'inverse.',
  },
  {
    Icon: Award,
    title: 'Savoir-faire',
    text: 'Une équipe passionnée réunit plusieurs métiers de l\'événementiel pour un accompagnement complet et cohérent.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-[8rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader eyebrow="Notre maison" title="À propos de Chic Nuptial" description="L'excellence de l'événementiel africain au service de vos moments précieux." />

        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E7DCCB] bg-gradient-to-br from-[#FFF8F2] via-white to-[#FFF4E6] p-8 shadow-[0_18px_50px_rgba(181,138,74,0.1)] sm:p-10">
            <span className="absolute -left-10 -top-12 h-36 w-36 rounded-full bg-[#F8D47C]/20 blur-3xl" />
            <span className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-[#F06A10]/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3 text-[#B58A4A]">
                <span className="h-px w-10 bg-current/40" />
                <Sparkles size={16} />
                <span className="h-px w-10 bg-current/40" />
              </div>
              <h2 className="font-playfair text-3xl text-[#4A2E1D]">Notre Histoire</h2>
              <div className="mt-5 space-y-4 font-cormorant text-xl leading-relaxed text-[#6E6258]">
                <p>
                  CHIC NUPTIAL est née d'une passion pour l'élégance et le raffinement
                  dans l'organisation d'événements. Basée à Abidjan, notre entreprise
                  s'est imposée comme une référence dans le domaine de l'événementiel
                  haut de gamme en Côte d'Ivoire.
                </p>
                <p>
                  Notre mission est de transformer chaque événement en une expérience
                  inoubliable, en mariant les traditions africaines avec les standards
                  internationaux du luxe.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#E7DCCB] bg-gradient-to-br from-[#FFF8F2] via-white to-[#FFF4E6] p-6 shadow-[0_18px_50px_rgba(181,138,74,0.1)] sm:p-8">
            <span className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#F8D47C]/20 blur-3xl" />
            <div className="relative grid h-full grid-cols-2 gap-4 content-center">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-[#E7DCCB] bg-white p-6 text-center shadow-[0_12px_30px_rgba(181,138,74,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(181,138,74,0.14)]">
                  <p className="font-playfair text-3xl text-[#B58A4A]">{stat.value}</p>
                  <div className="mx-auto my-3 h-0.5 w-10 bg-[#CFB53B]/40" />
                  <p className="font-montserrat text-sm font-medium leading-5 text-[#4A2E1D]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-12 flex items-center justify-center gap-3 text-[#B58A4A]">
            <span className="h-px w-12 bg-current/40" />
            <Sparkles size={16} />
            <span className="h-px w-12 bg-current/40" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map(({ Icon, title, text }) => (
              <article key={title} className="group relative overflow-hidden rounded-[2rem] border border-[#E7DCCB] bg-gradient-to-br from-[#FFF8F2] via-white to-[#FFF4E6] p-8 text-center shadow-[0_14px_38px_rgba(181,138,74,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(181,138,74,0.16)]">
                <span className="absolute -left-10 -top-12 h-28 w-28 rounded-full bg-[#F8D47C]/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4E6] text-[#B58A4A] transition group-hover:bg-[#B58A4A] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </span>
                <h3 className="relative mt-6 font-playfair text-2xl text-[#4A2E1D]">{title}</h3>
                <div className="relative mx-auto my-4 h-0.5 w-10 bg-[#CFB53B]/40" />
                <p className="relative font-cormorant text-lg leading-relaxed text-[#6E6258]">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      <CTASection />
    </div>
  );
};

export default About;
