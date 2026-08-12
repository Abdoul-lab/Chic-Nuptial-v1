import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../data/content';

const WhatsAppButton = () => {
  const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);

  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
