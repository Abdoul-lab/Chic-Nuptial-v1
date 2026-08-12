import ServiceCard from '../components/cards/ServiceCard';
import CTASection from '../components/sections/CTASection';
import PageHeader from '../components/common/PageHeader';
import { SERVICES } from '../data/content';

const Services = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-[8rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader eyebrow="Savoir-faire Chic Nuptial" title="Nos services" description="Robes de mariée, robes de soirée, décoration, dragées personnalisées et accompagnement complet." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} {...service} imageIndex={index} />
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
};

export default Services;
