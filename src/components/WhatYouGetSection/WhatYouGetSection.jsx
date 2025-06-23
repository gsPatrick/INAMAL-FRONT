// src/components/WhatYouGetSection/WhatYouGetSection.jsx
import React from 'react';
import { Typography, Row, Col, Button, Card } from 'antd';
import {
  ProfileOutlined,
  RobotOutlined,
  SolutionOutlined,
  GiftOutlined,
  // DollarCircleFilled, // Removido se não usado diretamente
  ArrowRightOutlined,
  CheckSquareFilled,
  SafetyCertificateFilled
} from '@ant-design/icons';
import './WhatYouGetSection.css';
// PASSO 1: Importar handleCheckout (já estava no seu código, ótimo!)
import { handleCheckout } from '../../services/checkoutService';


const { Title, Paragraph } = Typography;

const WhatYouGetSection = () => {
  const includedItems = [
    {
      icon: <ProfileOutlined />,
      title: 'Questionário Oficial INAMAL',
      description: 'Acesso a perguntas estratégicas, elaboradas por especialistas com mais de 15 anos de vivência prática em almoxarifados.',
      delay: 1
    },
    {
      icon: <RobotOutlined />,
      title: 'Análise Automatizada com IA',
      description: 'Suas respostas são processadas por nossa inteligência artificial, transformando dados brutos em insights valiosos e acionáveis.',
      delay: 2
    },
    {
      icon: <SolutionOutlined />,
      title: 'Relatório Personalizado Completo',
      description: (
        <>
          Um diagnóstico detalhado da maturidade do seu setor, incluindo:
          <ul className="custom-report-details-list">
            <li><CheckSquareFilled /> Sua nota geral de maturidade.</li>
            <li><CheckSquareFilled /> Diagnóstico por pilar fundamental (recebimento, estoque, etc.).</li>
            <li><CheckSquareFilled /> Sugestões práticas e priorizadas para evolução imediata.</li>
          </ul>
        </>
      ),
      delay: 3
    },
    {
      icon: <GiftOutlined />,
      title: 'Bônus Exclusivo de Lançamento',
      description: 'Utilize o valor do diagnóstico como crédito na consultoria completa Almoxarifado 360° e aprofunde a transformação.',
      delay: 4
    }
  ];

  return (
    <div className="what-you-get-section-v3" id="what-you-get-section">
      <div className="container">
        <Row justify="center" className="section-header animate-fade-in-up delay-0">
          <Col>
            <Title level={2} className="section-title">
              O Que Você <span className="highlight-text">Recebe</span> ao Adquirir o INAMAL
            </Title>
            <Paragraph className="section-subtitle">
              Um investimento estratégico no futuro do seu almoxarifado, com retorno claro e mensurável.
            </Paragraph>
          </Col>
        </Row>

        <div className="decorative-connector-line animate-draw-line delay-1"></div>

        <Row gutter={[32, 32]} style={{ marginTop: '50px', position: 'relative', zIndex: 2 }}>
          {includedItems.map((item, index) => (
            <Col xs={24} sm={12} lg={6} key={item.title} className={`animate-fade-in-up delay-${item.delay}`}>
              <Card hoverable className="included-feature-card">
                <div className="feature-card-icon-wrapper">
                  {React.cloneElement(item.icon, { className: 'feature-card-icon' })}
                </div>
                <Title level={4} className="feature-card-title">{item.title}</Title>
                <div className="feature-card-description">{item.description}</div>
                <div className="card-bottom-decorator"></div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row justify="center" style={{ marginTop: '80px' }} className="animate-fade-in-up delay-5">
          <Col xs={24} md={20} lg={16} xl={12}>
            <div className="inamal-investment-box">
              <div className="investment-shine-effect"></div>
              <SafetyCertificateFilled className="investment-badge-icon" />
              <div className="investment-main-content">
                <Paragraph className="investment-label">Investimento Único e Inteligente</Paragraph>
                <Title level={1} className="investment-amount">R$ 67,90</Title>
                <Paragraph className="investment-subtext">
                  Transforme seu almoxarifado com um diagnóstico preciso. <br/>Acesso vitalício à plataforma base e futuras atualizações.
                </Paragraph>
              </div>
              <div className="investment-footer-elements">
                <span className="secure-checkout-text">Pagamento 100% Seguro</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row justify="center" style={{ marginTop: '60px' }} className="animate-fade-in-up delay-6">
          <Col>
            <Button
              type="primary"
              size="large"
              className="premium-cta-button"
              icon={<ArrowRightOutlined />}
              // PASSO 2: Adicionar o onClick para chamar handleCheckout
              onClick={(e) => handleCheckout(e.currentTarget)}
            >
              <span className="cta-text">Quero Transformar Meu Almoxarifado Agora</span>
              <span className="cta-glow"></span>
            </Button>
          </Col>
        </Row>
      </div>
      <div className="background-shape shape-blur-1"></div>
      <div className="background-shape shape-blur-2"></div>
      <div className="subtle-grid-pattern"></div>
    </div>
  );
};

export default WhatYouGetSection;