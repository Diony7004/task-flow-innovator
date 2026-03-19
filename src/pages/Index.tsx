import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StatsSection from "@/components/sections/StatsSection";
import ResponsibleAISection from "@/components/sections/ResponsibleAISection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <IndustriesSection />
    <WhyUsSection />
    <StatsSection />
    <ResponsibleAISection />
    <ContactSection />
  </Layout>
);

export default Index;
