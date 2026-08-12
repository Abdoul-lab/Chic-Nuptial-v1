import HeroSection from '../components/sections/HeroSection';
import Advantages from '../components/sections/Advantages';
import OurUniverse from '../components/sections/OurUniverse';
import Reassurance from '../components/sections/Reassurance';
import ServicesPreview from '../components/sections/ServicesPreview';
import RentalsPreview from '../components/sections/RentalsPreview';
import GalleryPreview from '../components/sections/GalleryPreview';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Advantages />
      <OurUniverse />
      <Reassurance />
      <ServicesPreview />
      <RentalsPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;