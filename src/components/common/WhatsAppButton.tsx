import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+2250707070707';
  const message = encodeURIComponent('Bonjour CHIC NUPTIAL, je souhaite obtenir des informations sur vos services.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;