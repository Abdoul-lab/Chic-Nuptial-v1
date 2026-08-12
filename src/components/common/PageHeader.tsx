import { Sparkles } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => (
  <header className="relative mb-12 overflow-hidden rounded-[2rem] border border-[#E7DCCB] bg-gradient-to-br from-[#FFF8F2] via-white to-[#FFF4E6] px-6 py-12 text-center shadow-[0_18px_50px_rgba(181,138,74,0.1)] sm:px-10 sm:py-16">
    <span className="absolute -left-10 -top-12 h-36 w-36 rounded-full bg-[#F8D47C]/20 blur-3xl" />
    <span className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-[#F06A10]/10 blur-3xl" />
    <div className="relative mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-center gap-3 text-[#B58A4A]"><span className="h-px w-10 bg-current/40" /><Sparkles size={16} /><span className="h-px w-10 bg-current/40" /></div>
      <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.32em] text-[#B58A4A]">{eyebrow}</p>
      <h1 className="mt-4 font-playfair text-4xl leading-tight text-[#4A2E1D] md:text-5xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-2xl font-cormorant text-xl leading-relaxed text-[#6E6258]">{description}</p>
    </div>
  </header>
);

export default PageHeader;
