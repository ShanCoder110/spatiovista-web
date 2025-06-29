import ComparisonSection from "../../components/ComparisonSection";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import MobileAppSection from "../../components/MobileAppSection";
import Navbar from "../../components/Navbar";
import ProjectsSection from "../../components/ProjectsSection";
import ServicesSection from "../../components/ServicesSection";
import StatsSection from "../../components/StatsSection";

const SpatioVistaLanding = () => {
  return (
    <div className="bg-background -z-10">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ComparisonSection />
      <ServicesSection />
      <MobileAppSection />
      <ProjectsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default SpatioVistaLanding;
