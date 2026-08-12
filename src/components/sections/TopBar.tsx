import { MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../../data/content';

const TopBar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-[#FAF8F3] border-b border-white/50 text-[#4A2E1D] text-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
        <a href={CONTACT_INFO.phoneHref} className="flex items-center gap-2 transition hover:text-[#B58A4A]">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92V21a1 1 0 0 1-1.11 1 19 19 0 0 1-8.63-3.07 19 19 0 0 1-6-6A19 19 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.66.29 1.31.5 1.95a1 1 0 0 1-.24 1L7.5 8.5" /></svg>
          <span>{CONTACT_INFO.phoneDisplay}</span>
        </a>
        <div className="hidden flex-1 text-center text-sm md:block">L'élégance au service de vos plus beaux moments</div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-sm">Suivez-nous :</span>
          <a
            aria-label="WhatsApp"
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 transition hover:opacity-100"
          >
            <MessageSquare size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
