import { useState } from 'react';

// Layout
import NavigationBar from "./components/layout/NavigationBar";
import SiteFooter from "./components/layout/SiteFooter";

// Secciones
import HeroBanner from "./components/sections/HeroBanner";
import FeaturesSection from "./components/sections/FeaturesSection";
import DiferentMobileDesktop from "./components/sections/DiferentMobileDesktop";
import BenefitsGrid from "./components/sections/BenefitsGrid";
import FaqSection from "./components/sections/FaqSection";
import CallToActionSection from "./components/sections/CallToActionSection";

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [openFaqItem, setOpenFaqItem] = useState(null);

  return (
    <div className="font-sans bg-gray-50 scroll-smooth">
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Sección Inicio */}
      <div id="inicio">
        <HeroBanner />
      </div>

      {/* Sección Módulos */}
      <div id="modulos" className="scroll-mt-24">
        <FeaturesSection />
      </div>

      {/* Sección Dispositivos */}
      <div id="dispositivos" className="scroll-mt-24">
        <DiferentMobileDesktop />
      </div>

      {/* Sección Info */}
      <div id="info" className="scroll-mt-24">
        <BenefitsGrid />
        <FaqSection
          openFaqItem={openFaqItem}
          setOpenFaqItem={setOpenFaqItem}
        />
      </div>

      {/* Llamado a la acción */}
      <CallToActionSection />

      {/* Footer con ID para el scroll */}
      <div id="contacto" className="scroll-mt-24">
        <SiteFooter />
      </div>
    </div>
  );
}