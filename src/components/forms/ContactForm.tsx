import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import { CONTACT_INFO } from '../../data/content';

const fieldClass = 'w-full rounded-[1.25rem] border border-[#D8C9B0] bg-[#FFFDF8] px-4 py-3 text-base text-[#3B3127] outline-none transition focus:border-[#F06A10] focus:ring-2 focus:ring-[#F06A10]/20';
const steps = ['Vos coordonnées', 'Votre projet', 'Les détails'];

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  services: '',
  eventDate: '',
  guestCount: '',
  budget: '',
  message: '',
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  services: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  message: string;
}

const buildWhatsAppMessage = (formData: FormData): string => {
  const lines = [
    'Bonjour CHIC NUPTIAL, je souhaite obtenir un devis.',
    '',
    `Nom : ${formData.name}`,
    `Email : ${formData.email}`,
    `WhatsApp : ${formData.phone}`,
    `Événement : ${formData.eventType}`,
  ];
  if (formData.services) lines.push(`Service : ${formData.services}`);
  if (formData.eventDate) lines.push(`Date souhaitée : ${formData.eventDate}`);
  if (formData.guestCount) lines.push(`Nombre d'invités : ${formData.guestCount}`);
  if (formData.budget) lines.push(`Budget : ${formData.budget}`);
  lines.push('', `Besoin : ${formData.message}`);
  return lines.join('\n');
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const successRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isSuccess) successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [isSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goNext = () => {
    if (step === 0 && (!formData.name || !formData.email || !formData.phone)) return;
    if (step === 1 && !formData.eventType) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < steps.length - 1) {
      goNext();
      return;
    }
    if (!formData.message) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    const message = encodeURIComponent(buildWhatsAppMessage(formData));
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setStep(0);
      setFormData(initialFormData);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto rounded-[2rem] border border-[#E7DCCB] bg-[#FFF8F2] p-5 shadow-[0_28px_80px_rgba(181,138,74,0.12)]">
      <div className="mb-7">
        <div className="flex items-center justify-between gap-2">
          {steps.map((label, index) => (
            <div key={label} className="flex flex-1 items-center last:flex-none">
              <div className="flex items-center gap-2">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${index <= step ? 'bg-[#F06A10] text-white' : 'bg-[#E7DCCB] text-[#6E6258]'}`}>{index + 1}</span>
                <span className={`hidden text-xs font-semibold uppercase tracking-[0.16em] sm:block ${index === step ? 'text-[#4A2E1D]' : 'text-[#9C8F82]'}`}>{label}</span>
              </div>
              {index < steps.length - 1 && <span className={`mx-2 h-px flex-1 ${index < step ? 'bg-[#F06A10]' : 'bg-[#E7DCCB]'}`} />}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center font-montserrat text-xs uppercase tracking-[0.2em] text-[#B58A4A]">Étape {step + 1} sur {steps.length} · {steps[step]}</p>
      </div>

      {step === 0 && <section className="rounded-[1.5rem] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(215,220,217,0.4)]">
        <h3 className="font-playfair text-2xl text-[#4A2E1D]">Comment vous joindre ?</h3>
        <p className="mt-1 text-sm text-[#6E6258]">Vos informations restent confidentielles.</p>
        <div className="mt-5 space-y-4">
          <div><label htmlFor="name" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-[#4A2E1D]">Nom *</label><input id="name" type="text" name="name" required value={formData.name} onChange={handleChange} autoComplete="name" className={fieldClass} /></div>
          <div><label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-[#4A2E1D]">Email *</label><input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} autoComplete="email" className={fieldClass} /></div>
          <div><label htmlFor="phone" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-[#4A2E1D]">WhatsApp *</label><input id="phone" type="tel" name="phone" required value={formData.phone} onChange={handleChange} autoComplete="tel" className={fieldClass} /></div>
        </div>
      </section>}

      {step === 1 && <section className="rounded-[1.5rem] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(215,220,217,0.4)]">
        <h3 className="font-playfair text-2xl text-[#4A2E1D]">Parlez-nous de l'événement</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div><label htmlFor="eventType" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-[#4A2E1D]">Événement *</label><select id="eventType" name="eventType" required value={formData.eventType} onChange={handleChange} className={fieldClass}><option value="">Sélectionnez...</option><option value="mariage">Mariage</option><option value="mariage-traditionnel">Mariage traditionnel</option><option value="fiancailles">Fiançailles</option><option value="anniversaire">Anniversaire</option><option value="reception">Réception VIP</option><option value="entreprise">Événement d'entreprise</option><option value="autre">Autre</option></select></div>
          <div><label htmlFor="services" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-[#4A2E1D]">Service</label><select id="services" name="services" value={formData.services} onChange={handleChange} className={fieldClass}><option value="">Sélectionnez un service...</option><option value="robes-de-mariee">Robes de mariée</option><option value="robes-de-soiree">Robes de soirée</option><option value="location-tenues-accessoires">Location de tenues et accessoires</option><option value="decoration-evenementielle">Décoration événementielle</option><option value="dragees-personnalisees">Dragées personnalisées</option><option value="accessoires-mariage">Accessoires de mariage</option><option value="espace-maquillage">Espace maquillage</option><option value="conseils-personnalises">Conseils personnalisés</option></select></div>
          <div><label htmlFor="eventDate" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-[#4A2E1D]">Date souhaitée</label><input id="eventDate" type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className={fieldClass} /></div>
          <div><label htmlFor="guestCount" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-[#4A2E1D]">Invités</label><select id="guestCount" name="guestCount" value={formData.guestCount} onChange={handleChange} className={fieldClass}><option value="">Sélectionnez...</option><option value="moins-de-50">Moins de 50</option><option value="50-100">50 - 100</option><option value="100-200">100 - 200</option><option value="200-500">200 - 500</option><option value="500+">Plus de 500</option></select></div>
        </div>
      </section>}

      {step === 2 && <section className="rounded-[1.5rem] bg-white p-5 shadow-[inset_0_0_0_1px_rgba(215,220,217,0.4)]">
        <h3 className="font-playfair text-2xl text-[#4A2E1D]">Une dernière précision</h3>
        <div className="mt-5 space-y-4">
          <div><label htmlFor="budget" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-[#4A2E1D]">Budget</label><select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={fieldClass}><option value="">Sélectionnez...</option><option value="500k-1m">500 000 - 1 000 000 FCFA</option><option value="1-5M">1 000 000 - 5 000 000 FCFA</option><option value="5-10M">5 000 000 - 10 000 000 FCFA</option><option value="10-20M">10 000 000 - 20 000 000 FCFA</option><option value="20M+">Plus de 20 000 000 FCFA</option></select></div>
          <div><label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase tracking-[0.25em] text-[#4A2E1D]">Votre besoin *</label><textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={5} className={`${fieldClass} resize-none`} placeholder="Parlez-nous de votre projet, de vos envies..." /></div>
        </div>
      </section>}

      <div className="mt-5 flex items-center justify-between gap-3">
        {step > 0 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="inline-flex items-center gap-2 rounded-full border border-[#D8C9B0] px-5 py-3 text-sm font-semibold text-[#4A2E1D] transition hover:border-[#F06A10]"><ArrowLeft size={17} />Précédent</button> : <span />}
        {step < steps.length - 1 ? <button type="button" onClick={goNext} className="inline-flex items-center gap-2 rounded-full bg-[#F06A10] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c85b0e]">Suivant<ArrowRight size={17} /></button> : <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-full bg-[#F06A10] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c85b0e] disabled:cursor-not-allowed disabled:opacity-50">{isSubmitting ? 'Envoi...' : <><Send size={17} />Demander mon devis</>}</button>}
      </div>
      {isSuccess && <div ref={successRef} className="mt-5 rounded-[1.5rem] border border-[#C7E6D9] bg-[#E9FBF0] px-6 py-5 text-center text-[#1C5B3F]"><p className="font-cormorant text-lg">✨ Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.</p></div>}
    </form>
  );
};

export default ContactForm;
