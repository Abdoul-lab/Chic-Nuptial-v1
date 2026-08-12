import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../../data/content';

const NewsletterForm = () => {
  return (
    <form
      action={`${CONTACT_INFO.emailHref}?subject=${encodeURIComponent("Inscription newsletter Chic Nuptial")}`}
      className="flex items-center gap-0 rounded-full border border-[#E7DCCB] bg-[#FAF8F3] px-1 py-1"
    >
      <input
        type="email"
        required
        name="email"
        placeholder="Votre email"
        aria-label="Votre adresse email"
        className="flex-1 bg-transparent px-4 py-3 text-[#4A2E1D] outline-none placeholder:text-[#9b8b7d]"
      />
      <button
        type="submit"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F06A10] text-[#FFFFFF] transition hover:bg-[#c85b0e]"
        aria-label="S'abonner"
      >
        <Send size={18} />
      </button>
    </form>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F3] text-[#4A2E1D] py-10 border-t border-[#E7DCCB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Logo Chic Nuptial" className="h-12 w-12 object-contain" />
              <div className="flex flex-col">
                <h3 className="inline-flex items-center gap-2 text-2xl leading-none tracking-[0.2em] text-[#000000]">
                  <span className="italic text-[#f06a10]" style={{ fontFamily: 'Monotype Corsiva, cursive' }}>
                    Chic
                  </span>
                  <span className="text-[#d4a557]" aria-hidden="true">
                    <svg viewBox="0 0 40 24" className="h-6 w-6" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="gold-ring-gradient-footer" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#f8d47c" />
                          <stop offset="50%" stopColor="#d4a557" />
                          <stop offset="100%" stopColor="#f2c94c" />
                        </linearGradient>
                      </defs>
                      <circle cx="13" cy="12" r="7" stroke="url(#gold-ring-gradient-footer)" strokeWidth="3" />
                      <circle cx="23" cy="12" r="7" stroke="url(#gold-ring-gradient-footer)" strokeWidth="3" />
                      <path d="M10 9 C12 4, 20 4, 22 9" stroke="url(#gold-ring-gradient-footer)" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                  <span className="italic text-[#4A2E1D]" style={{ fontFamily: 'Monotype Corsiva, cursive' }}>
                    Nuptial
                  </span>
                </h3>
                <span className="mt-0 block whitespace-nowrap text-[0.75rem] leading-none lowercase tracking-[0.22em] text-[#6E6258]">
                  votre événement,
                  <span className="text-[#7B4D25]"> notre style</span>
                </span>
              </div>
            </div>
            <p className="font-montserrat text-base leading-7 text-[#6E6258]">
              L'excellence de l'événementiel africain à Abidjan.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-[#B58A4A] mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <a href={CONTACT_INFO.phoneHref} className="flex items-center gap-3 font-montserrat text-base transition hover:text-[#B58A4A]">
                  <Phone size={20} className="text-[#B58A4A]" />
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href={CONTACT_INFO.emailHref} className="flex items-center gap-3 font-montserrat text-base transition hover:text-[#B58A4A]">
                  <Mail size={20} className="text-[#B58A4A]" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-[#B58A4A]" />
                <span className="font-montserrat text-base">{CONTACT_INFO.addressFull}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-3xl border border-[#E7DCCB] shadow-[0_20px_45px_rgba(181,138,74,0.1)]">
            <h4 className="font-playfair text-xl text-[#7B4D25] mb-3">Newsletter</h4>
            <p className="font-montserrat text-sm text-[#6E6258] mb-4">
              Recevez nos inspirations et offres exclusives directement dans votre boîte.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-4 border-t border-[#E7DCCB] pt-2 text-center">
          <p className="font-montserrat text-sm text-[#6E6258]/80">
            © {currentYear} CHIC NUPTIAL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
