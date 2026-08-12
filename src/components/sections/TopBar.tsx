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
          <a aria-label="Facebook" href={CONTACT_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="opacity-80 transition hover:opacity-100">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" /></svg> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
