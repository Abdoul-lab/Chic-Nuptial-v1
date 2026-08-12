import CTAButton from '../components/common/CTAButton';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-[8rem] flex items-center">
      <div className="mx-auto max-w-2xl px-4 text-center py-16">
        <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.32em] text-[#B58A4A]">Erreur 404</p>
        <h1 className="mt-4 font-playfair text-6xl text-[#4A2E1D]">Page introuvable</h1>
        <p className="mx-auto mt-5 max-w-md font-cormorant text-xl leading-relaxed text-[#6E6258]">
          La page que vous recherchez n'existe pas ou a été déplacée. Revenez à l'accueil pour continuer votre visite.
        </p>
        <div className="mt-10">
          <CTAButton text="Retour à l'accueil" link="/" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
