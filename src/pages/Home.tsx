import HeroSection from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import GalleryPreview from '../components/sections/GalleryPreview';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;