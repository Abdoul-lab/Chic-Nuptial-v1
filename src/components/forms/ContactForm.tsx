import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const successRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isSuccess) {
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {isSuccess && (
        <div
          ref={successRef}
          className="rounded-2xl border border-green-200 bg-green-50 px-6 py-4 text-center text-green-800"
        >
          <p className="font-cormorant text-lg">
            ✨ Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-cormorant text-lg text-[#2C2C2C] mb-2">
            Nom complet *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            className="w-full px-4 py-3 bg-white border border-[#F7E7CE]/50 rounded-lg focus:border-[#CFB53B] focus:ring-2 focus:ring-[#CFB53B]/20 transition-all font-cormorant text-lg outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block font-cormorant text-lg text-[#2C2C2C] mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className="w-full px-4 py-3 bg-white border border-[#F7E7CE]/50 rounded-lg focus:border-[#CFB53B] focus:ring-2 focus:ring-[#CFB53B]/20 transition-all font-cormorant text-lg outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block font-cormorant text-lg text-[#2C2C2C] mb-2">
            Téléphone *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="w-full px-4 py-3 bg-white border border-[#F7E7CE]/50 rounded-lg focus:border-[#CFB53B] focus:ring-2 focus:ring-[#CFB53B]/20 transition-all font-cormorant text-lg outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="eventType" className="block font-cormorant text-lg text-[#2C2C2C] mb-2">
            Type d'événement *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-[#F7E7CE]/50 rounded-lg focus:border-[#CFB53B] focus:ring-2 focus:ring-[#CFB53B]/20 transition-all font-cormorant text-lg outline-none"
          >
            <option value="">Sélectionnez...</option>
            <option value="mariage">Mariage</option>
            <option value="mariage-traditionnel">Mariage Traditionnel</option>
            <option value="fiancailles">Fiançailles</option>
            <option value="anniversaire">Anniversaire</option>
            <option value="reception">Réception VIP</option>
            <option value="entreprise">Événement d'entreprise</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="eventDate" className="block font-cormorant text-lg text-[#2C2C2C] mb-2">
            Date de l'événement
          </label>
          <input
            id="eventDate"
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-[#F7E7CE]/50 rounded-lg focus:border-[#CFB53B] focus:ring-2 focus:ring-[#CFB53B]/20 transition-all font-cormorant text-lg outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="guestCount" className="block font-cormorant text-lg text-[#2C2C2C] mb-2">
            Nombre d'invités
          </label>
          <select
            id="guestCount"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-[#F7E7CE]/50 rounded-lg focus:border-[#CFB53B] focus:ring-2 focus:ring-[#CFB53B]/20 transition-all font-cormorant text-lg outline-none"
          >
            <option value="">Sélectionnez...</option>
            <option value="50-100">50 - 100 invités</option>
            <option value="100-200">100 - 200 invités</option>
            <option value="200-500">200 - 500 invités</option>
            <option value="500+">Plus de 500 invités</option>
          </select>
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="budget" className="block font-cormorant text-lg text-[#2C2C2C] mb-2">
            Budget estimé (FCFA)
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-[#F7E7CE]/50 rounded-lg focus:border-[#CFB53B] focus:ring-2 focus:ring-[#CFB53B]/20 transition-all font-cormorant text-lg outline-none"
          >
            <option value="">Sélectionnez...</option>
            <option value="1-5M">1 000 000 - 5 000 000 FCFA</option>
            <option value="5-10M">5 000 000 - 10 000 000 FCFA</option>
            <option value="10-20M">10 000 000 - 20 000 000 FCFA</option>
            <option value="20M+">Plus de 20 000 000 FCFA</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block font-cormorant text-lg text-[#2C2C2C] mb-2">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 bg-white border border-[#F7E7CE]/50 rounded-lg focus:border-[#CFB53B] focus:ring-2 focus:ring-[#CFB53B]/20 transition-all font-cormorant text-lg resize-none outline-none"
          placeholder="Décrivez-nous votre projet, vos envies, vos rêves..."
        />
      </div>
      
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center space-x-2 px-12 py-4 bg-[#CFB53B] text-[#FFFFF0] font-cormorant text-xl rounded-full hover:bg-[#CFB53B]/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-[#FFFFF0] border-t-transparent rounded-full animate-spin" />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Envoyer ma demande</span>
            </>
          )}
        </button>
      </div>
      
      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg text-center animate-fade-in">
          <p className="font-cormorant text-lg">
            ✨ Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;