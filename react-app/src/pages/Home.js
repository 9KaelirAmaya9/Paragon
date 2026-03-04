import ParagonNav from '../components/paragon/ParagonNav';
import HeroSection from '../components/paragon/HeroSection';
import WhyParagon from '../components/paragon/WhyParagon';
import CaseStudies from '../components/paragon/CaseStudies';
import ServicesSection from '../components/paragon/ServicesSection';
import ProcessTimeline from '../components/paragon/ProcessTimeline';
import PricingSection from '../components/paragon/PricingSection';
import AIReceptionist from '../components/paragon/AIReceptionist';
import FAQSection from '../components/paragon/FAQSection';
import ContactSection from '../components/paragon/ContactSection';
import ParagonFooter from '../components/paragon/ParagonFooter';

const Home = () => (
  <div className="paragon-root relative min-h-screen" data-testid="home-page">
    {/* Layered dark background */}
    <div className="paragon-bg" aria-hidden="true" />

    <ParagonNav />

    <main id="main-content" tabIndex="-1">
      <HeroSection />
      <WhyParagon />
      <CaseStudies />
      <ServicesSection />
      <ProcessTimeline />
      <PricingSection />
      <AIReceptionist />
      <FAQSection />
      <ContactSection />
    </main>

    <ParagonFooter />
  </div>
);

export default Home;
