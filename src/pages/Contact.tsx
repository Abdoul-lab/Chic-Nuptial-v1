import ContactForm from '../components/forms/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import { CONTACT_INFO } from '../data/content';

const contactCards = [
  {
    label: 'Téléphone & WhatsApp',
    value: CONTACT_INFO.phoneDisplay,
    caption: 'Réponse rapide par WhatsApp',
    icon: Phone,
    href: CONTACT_INFO.phoneHref,
  },
  {
    label: 'Email',
    value: CONTACT_INFO.email,
    caption: 'Pour toute demande ou information',
    icon: Mail,
    href: CONTACT_INFO.emailHref,
  },
  {
    label: 'Notre studio',
    value: CONTACT_INFO.address,
    caption: CONTACT_INFO.hours,
    icon: MapPin,
    href: CONTACT_INFO.mapsUrl,
    external: true,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pb-16 pt-[8rem]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHeader eyebrow="Chic Nuptial" title="Devis en ligne" description="Obtenez gratuitement votre devis en quelques minutes." />

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4 lg:py-1">
            <div className="mb-6 px-2">
              <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.25em] text-[#B58A4A]">Nous contacter</p>
              <h2 className="mt-2 font-playfair text-3xl text-[#4A2E1D]">Nous sommes à votre écoute</h2>
              <p className="mt-2 text-sm leading-6 text-[#6E6258]">Échangez avec notre équipe pour imaginer une célébration qui vous ressemble.</p>
            </div>

            {contactCards.map(({ label, value, caption, icon: Icon, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group flex items-center gap-5 rounded-[1.5rem] border border-[#E7DCCB] bg-white p-5 shadow-[0_12px_35px_rgba(181,138,74,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#B58A4A] hover:shadow-[0_18px_45px_rgba(181,138,74,0.16)]"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4E6] text-[#F06A10] transition group-hover:bg-[#F06A10] group-hover:text-white">
                  <Icon size={24} />
                </span>
                <span>
                  <span className="mb-1 block font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-[#B58A4A]">{label}</span>
                  <span className="block font-playfair text-xl text-[#4A2E1D]">{value}</span>
                  <span className="mt-1 block text-sm text-[#6E6258]">{caption}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="rounded-[2rem] border border-[#E7DCCB] bg-white p-3 shadow-[0_18px_55px_rgba(181,138,74,0.12)] sm:p-5">
            <ContactForm />
          </div>
        </div>

        <div className="mb-16 overflow-hidden rounded-3xl border border-[#E7DCCB] bg-white shadow-[0_18px_55px_rgba(181,138,74,0.1)]">
          <div className="bg-[#FFF4E6] px-6 py-5">
            <h3 className="font-playfair text-2xl text-[#4A2E1D]">Notre emplacement</h3>
            <p className="mt-1 font-montserrat text-sm text-[#6E6258]">Découvrez notre studio à Cocody, directement sur Google Maps.</p>
          </div>
          <div className="aspect-[16/9] sm:aspect-[3/2]">
            <iframe title="Carte Google Maps Chic Nuptial" src="https://www.google.com/maps?q=Cocody,+Abidjan,+C%C3%B4te+d'Ivoire&output=embed" className="h-full w-full border-0" allowFullScreen loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
