// src/components/PricingHighlightSection/PricingHighlightSection.jsx
import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import { RocketOutlined, CheckCircleOutlined, GiftOutlined, ThunderboltFilled } from '@ant-design/icons';
import './PricingHighlightSection.css';
import { handleCheckout } from '../../services/checkoutService';

const { Title, Paragraph } = Typography;

const PricingHighlightSection = () => {
  const handleCTAClick = () => {
    console.log('Botão CTA da seção de preço clicado!');
  };

  return (
    <div className="pricing-highlight-section compact light-theme" id="pricing-section"> {/* Adicionada classe 'light-theme' */}
      {/* Elementos gráficos de fundo adicionais */}
      <div className="ph-bg-graphic ph-bg-circle-1"></div>
      <div className="ph-bg-graphic ph-bg-plus-1"></div>
      <div className="ph-bg-graphic ph-bg-triangle-1"></div>


      <div className="ph-container">
        <Row justify="center">
          <Col xs={24} md={22} lg={20} style={{ textAlign: 'center' }}>
            <div className="ph-icon-header animate-pop-in delay-0">
              <GiftOutlined />
            </div>
            <Title level={2} className="ph-title animate-fade-in-up delay-1">
              Acesso Imediato à Transformação do Seu Almoxarifado!
            </Title>

            <div className="ph-price-display-wrapper animate-zoom-in delay-2">
              <ThunderboltFilled className="ph-sparkle sparkle-1" />
              <ThunderboltFilled className="ph-sparkle sparkle-2" />
              <ThunderboltFilled className="ph-sparkle sparkle-3" />
              <ThunderboltFilled className="ph-sparkle sparkle-4" />

              <span className="ph-price-label">Investimento Único</span>
              <div className="ph-price-main">
                <span className="ph-price-currency">R$</span>
                <span className="ph-price-value">67</span>
                <span className="ph-price-cents">,90</span>
              </div>
              <span className="ph-price-condition">Liberação Instantânea Pós-Pagamento</span>
            </div>

            <Paragraph className="ph-benefits-list compact-benefits animate-fade-in-up delay-3">
              <span><CheckCircleOutlined /> Diagnóstico Completo</span>
              <span><CheckCircleOutlined /> Nota de Maturidade</span>
              <span><CheckCircleOutlined /> Plano de Ação</span>
            </Paragraph>

            <Button
              type="primary"
              size="large"
              className="ph-cta-button animate-fade-in-up delay-4"
              icon={<RocketOutlined />}
              onClick={(e) => handleCheckout(e.currentTarget)} 
            >
              DESBLOQUEAR MEU DIAGNÓSTICO AGORA
            </Button>
            <Paragraph className="ph-guarantee-text animate-fade-in-up delay-5">
              Transformação real, sem surpresas.
            </Paragraph>
          </Col>
        </Row>
      </div>
      {/* Elementos decorativos de fundo originais - podem ser removidos ou ter cores ajustadas */}
      {/* <div className="ph-decorative-bg-shape ph-shape-1"></div> */}
      {/* <div className="ph-decorative-bg-shape ph-shape-2"></div> */}
    </div>
  );
};

export default PricingHighlightSection;