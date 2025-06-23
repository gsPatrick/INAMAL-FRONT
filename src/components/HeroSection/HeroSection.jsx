  // src/components/HeroSection/HeroSection.jsx
  import React from 'react';
  import { Typography, Button, Row, Col } from 'antd';
  import {
    ArrowDownOutlined,
    PlayCircleOutlined,
    BarChartOutlined, // Para representar dados/análise
    ToolOutlined,     // Para representar a ferramenta/diagnóstico
    RiseOutlined,     // Para representar evolução/melhoria
    DotChartOutlined, // Para pontos de dados/maturidade
  } from '@ant-design/icons';
  import './HeroSection.css';
  import { handleCheckout } from '../../services/checkoutService';


  const { Title, Paragraph } = Typography;

  const HeroSection = () => {
    const scrollToNextSection = () => {
      // Exemplo: document.getElementById('about-inamal-section')?.scrollIntoView({ behavior: 'smooth' });
      // Ou, se o botão "Iniciar Diagnóstico Agora" deve levar para uma página específica:
      // navigate('/diagnostico'); 
      // Por enquanto, vamos simular o clique ou rolar para a próxima seção se houver uma lógica específica.
      const aboutSection = document.getElementById('about-inamal-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log("Rolar para a próxima seção ou iniciar ação...");
      }
    };

    return (
      <div className="hero-section" id="hero-section"> {/* ID adicionado aqui */}
        <Row align="middle" className="hero-content-row">
          <Col xs={24} lg={12} className="hero-text-col">
            <Title level={1} className="hero-title animate-fade-in-up delay-1">
              Mapeie a maturidade do seu almoxarifado em tempo real.
            </Title>
            <Paragraph className="hero-subtitle animate-fade-in-up delay-2">
              Identifique falhas operacionais e receba um relatório com ações práticas para evoluir o setor.
            </Paragraph>
            <div className="hero-cta-buttons animate-fade-in-up delay-3">
              <Button
                type="primary"
                size="large"
                className="hero-cta-primary"
                icon={<PlayCircleOutlined />}
                // MODIFICAÇÃO AQUI
                onClick={(e) => handleCheckout(e.currentTarget)} 
              >
                Iniciar Diagnóstico Agora
              </Button>
              <Button
                type="default"
                size="large"
                className="hero-cta-secondary"
                onClick={() => {
                  const aboutSection = document.getElementById('about-inamal-section');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                icon={<ArrowDownOutlined />}
              >
                Saber Mais
              </Button>
            </div>
          </Col>
          <Col xs={24} lg={12} className="hero-graphic-col animate-fade-in-right delay-4">
            <div className="interactive-graphic-container">
              <div className="graphic-core">
                <ToolOutlined className="core-icon" />
                <div className="pulse-ring ring1"></div>
                <div className="pulse-ring ring2"></div>
                <div className="pulse-ring ring3"></div>
              </div>
              <div className="graphic-node node1">
                <BarChartOutlined />
              </div>
              <div className="graphic-node node2">
                <RiseOutlined />
              </div>
              <div className="graphic-node node3">
                <DotChartOutlined />
              </div>
              {/* Linhas de conexão (decorativas) */}
              <svg className="connection-lines" viewBox="0 0 300 300">
                <line x1="150" y1="150" x2="60" y2="60" stroke="rgba(33, 67, 110, 0.3)" strokeWidth="2" className="line-anim-1"/>
                <line x1="150" y1="150" x2="240" y2="100" stroke="rgba(33, 67, 110, 0.3)" strokeWidth="2" className="line-anim-2"/>
                <line x1="150" y1="150" x2="100" y2="250" stroke="rgba(33, 67, 110, 0.3)" strokeWidth="2" className="line-anim-3"/>
              </svg>
            </div>
          </Col>
        </Row>
        {/* Elementos decorativos de fundo sutis - mantidos */}
        <div className="decorative-blur-shape shape-a"></div>
        <div className="decorative-blur-shape shape-b"></div>
      </div>
    );
  };

  export default HeroSection;