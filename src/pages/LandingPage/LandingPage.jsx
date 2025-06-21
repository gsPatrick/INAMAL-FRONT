// src/pages/LandingPage/LandingPage.jsx
import React from 'react';
// Layout e Content do Ant Design geralmente não são necessários aqui se App.jsx já os define.
// A menos que você precise de um sub-layout específico apenas para a LandingPage.
// Por simplicidade, vamos assumir que o Content principal é definido em App.jsx.
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutInamalSection from '../../components/AboutInamalSection/AboutInamalSection';
import HowItWorksSection from '../../components/HowItWorksSection/HowItWorksSection';
import WhatYouGetSection from '../../components/WhatYouGetSection/WhatYouGetSection';
import OriginStorySection from '../../components/OriginStorySection/OriginStorySection';
import AlmoxarifadoChallengeSection from '../../components/AlmoxarifadoChallengeSection/AlmoxarifadoChallengeSection';
import ImpactSection from '../../components/ImpactSection/ImpactSection';
import ValuePropositionSection from '../../components/ValuePropositionSection/ValuePropositionSection';

import './LandingPage.css';

const LandingPage = () => {
  return (
    // A classe landing-page-content será aplicada ao wrapper em App.jsx (o <Content>)
    // ou, se você preferir um wrapper extra aqui, pode ser <div className="landing-page-wrapper">
    // No entanto, com a estrutura atual do App.jsx, o <Content className="main-content">
    // já serve como o container principal para o conteúdo da página.
    // A classe .landing-page-content em LandingPage.css pode ser aplicada
    // ao .main-content em App.css se você quiser estilos globais para todas as páginas
    // ou pode ser específica aqui se LandingPage precisar de um tratamento diferente.
    // Por enquanto, manteremos o CSS de LandingPage.css para estilizar
    // o container geral da página, assumindo que ele é o <Content> de App.jsx.

    // As seções são renderizadas diretamente.
    <>
      < AlmoxarifadoChallengeSection />
      < ValuePropositionSection />
      <HeroSection />
      <AboutInamalSection />
      <ImpactSection /> {/* <<< ADICIONAR NOVA SEÇÃO AQUI */}
      <HowItWorksSection />
      <WhatYouGetSection />
      <OriginStorySection />
    </>
  );
};

export default LandingPage;