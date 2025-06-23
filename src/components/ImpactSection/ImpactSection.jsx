// src/components/ImpactSection/ImpactSection.jsx
import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import {
  FundViewOutlined,
  RocketOutlined,
  SettingOutlined,
  RightCircleFilled,
} from '@ant-design/icons';
import './ImpactSection.css';
import impactImage from '../../assets/images/slider/almoxarifado4.jpg';
// PASSO 1: Importar handleCheckout
import { handleCheckout } from '../../services/checkoutService';

const { Title, Paragraph } = Typography;

const ImpactSection = () => {
  const impactFeatures = [
    {
      icon: <FundViewOutlined />,
      title: 'Visão Clara dos Desafios',
      description: 'Identifique gargalos e oportunidades de melhoria com um diagnóstico preciso.',
    },
    {
      icon: <RocketOutlined />,
      title: 'Resultados Impulsionados',
      description: 'Transforme insights em ações concretas para otimizar custos e eficiência.',
    },
    {
      icon: <SettingOutlined />,
      title: 'Processos Otimizados',
      description: 'Receba recomendações personalizadas para refinar suas operações diárias.',
    },
  ];

  return (
    <section className="impact-section-v3" id="impact-section-v3">
      <div className="container">
        <Row gutter={[48, 32]} align="middle" className="impact-row-v3">
          <Col xs={24} md={12} lg={14} className="impact-image-col-v3 animate-slide-in-left-v3 delay-0">
            <div className="impact-image-wrapper-v3">
              <img src={impactImage} alt="Análise e planejamento de almoxarifado" className="impact-image-v3" />
            </div>
          </Col>

          <Col xs={24} md={12} lg={10} className="impact-content-col-v3 animate-fade-in-right-v3 delay-1">
            <Title level={2} className="impact-title-v3">
              Seu Almoxarifado no <span className="highlight-text-v3 animate-highlight-text">Próximo Nível</span>
            </Title>
            <Paragraph className="impact-subtitle-v3">
              Com o INAMAL, você não apenas identifica problemas, mas descobre o caminho para uma gestão de estoque que realmente faz a diferença no seu resultado final.
            </Paragraph>

            <div className="impact-features-list-v3">
              {impactFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="impact-feature-item-v3"
                  style={{
                    animationName: 'fadeInUpImpactV3',
                    animationDuration: '0.7s',
                    animationFillMode: 'forwards',
                    animationTimingFunction: 'ease-out',
                    animationDelay: `${0.4 + index * 0.2}s`,
                    opacity: 0,
                  }}
                >
                  <div className="feature-item-icon-wrapper-v3">
                    {React.cloneElement(feature.icon, { className: 'feature-item-icon-v3' })}
                  </div>
                  <div className="feature-item-text-v3">
                    <Title level={4} className="feature-item-title-v3">{feature.title}</Title>
                    <Paragraph className="feature-item-description-v3">{feature.description}</Paragraph>
                  </div>
                </div>
              ))}
            </div>

            <Button
              type="primary"
              size="large"
              className="impact-cta-button-v3"
              icon={<RightCircleFilled />}
              // PASSO 2: Adicionar o onClick para chamar handleCheckout
              onClick={(e) => handleCheckout(e.currentTarget)}
              style={{
                animationName: 'fadeInUpImpactV3',
                animationDuration: '0.7s',
                animationFillMode: 'forwards',
                animationTimingFunction: 'ease-out',
                animationDelay: `${0.4 + impactFeatures.length * 0.2 + 0.1}s`,
                opacity: 0,
              }}
            >
              <span>Descobrir Meu Potencial</span>
              <span className="btn-glow-v3"></span>
            </Button>

          </Col>
        </Row>
      </div>
      <div className="decorative-bg-blob-v3 blob-1-v3"></div>
      <div className="decorative-bg-blob-v3 blob-2-v3"></div>
    </section>
  );
};

export default ImpactSection;