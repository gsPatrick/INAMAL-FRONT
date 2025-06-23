// src/components/OriginStorySection/OriginStorySection.jsx
import React from 'react';
import { Typography, Row, Col, Button, Tag } from 'antd';
import {
  FieldTimeOutlined,
  EyeOutlined,
  HeartFilled,
  AimOutlined,
  RiseOutlined,
  MessageFilled,
  BranchesOutlined,
  RocketOutlined,
  PlayCircleOutlined, // Adicionar para o novo botão, se desejar um ícone
} from '@ant-design/icons';
import './OriginStorySection.css';
// PASSO 1: Importar handleCheckout
import { handleCheckout } from '../../services/checkoutService';

const { Title, Paragraph } = Typography;

const OriginStorySection = () => {
  const storyPoints = [
    {
      id: 'experience',
      icon: <FieldTimeOutlined />,
      title: "Anos de Experiência em Campo",
      text: "Com o projeto Almoxarife na Prática, percorremos o Brasil, mergulhando na realidade de inúmeros almoxarifados e identificando padrões de desafios.",
      delay: 1,
      graphicElement: (
        <div className="timeline-graphic experience-graphic-v3">
          <div className="map-path">
            <svg viewBox="0 0 100 50"><path d="M5 45 Q 25 5, 45 25 T 85 15" fill="none" strokeLinecap="round" strokeWidth="2.5"/></svg>
          </div>
          <BranchesOutlined className="branch-icon"/>
        </div>
      )
    },
    {
      id: 'reality',
      icon: <EyeOutlined />,
      title: "A Visão da Realidade Ignorada",
      text: "Vimos setores estratégicos tratados como meros depósitos, resultando em desperdícios, retrabalho e oportunidades perdidas por falta de visão.",
      delay: 2,
      graphicElement: (
        <div className="timeline-graphic reality-graphic-v3">
          <div className="gear gear-1"><RocketOutlined/></div>
          <div className="gear gear-2"><AimOutlined/></div>
        </div>
      )
    },
    {
      id: 'human_factor',
      icon: <HeartFilled />,
      title: "O Elo Humano: A Maior Riqueza",
      text: "Mais que processos, encontramos pessoas: profissionais talentosos desmotivados, precisando de reconhecimento e uma voz para suas ideias.",
      delay: 3,
      graphicElement: (
        <div className="timeline-graphic human-graphic-v3">
          <div className="pulse-line-bg"></div>
          <div className="pulse-line-fg"></div>
          <HeartFilled className="floating-heart" />
        </div>
      )
    },
    {
      id: 'solution',
      icon: <RocketOutlined />,
      title: "A Gênese de uma Solução Inovadora",
      text: "Assim nasceu o INAMAL: uma ferramenta para simplificar diagnósticos, dar voz ao almoxarifado e catalisar a transformação e valorização do setor.",
      delay: 4,
      graphicElement: (
        <div className="timeline-graphic solution-graphic-v3">
          <div className="light-beam beam-1"></div>
          <div className="light-beam beam-2"></div>
          <div className="light-beam beam-3"></div>
          <AimOutlined className="target-icon-solution"/>
        </div>
      )
    }
  ];

  return (
    <div className="origin-story-section-v3" id="origin-story-section">
      <div className="section-bg-dots-pattern"></div>
      <div className="section-bg-gradient-overlay"></div>
      <div className="section-bg-blur-shape shape-story-1-v3"></div>
      <div className="section-bg-blur-shape shape-story-2-v3"></div>

      <div className="container">
        <Row justify="center" className="section-header animate-item-v3 delay-0">
          <Col>
            <Title level={2} className="section-title">
              <span className="highlight-text">A Jornada do INAMAL</span>: Da Observação à Transformação
            </Title>
            <Paragraph className="section-subtitle">
              Descubra a paixão e o propósito que impulsionam nossa missão de revolucionar a gestão de almoxarifados.
            </Paragraph>
          </Col>
        </Row>

        <div className="story-timeline-v3">
          {storyPoints.map((point, index) => (
            <div key={point.id} className={`timeline-item-v3 animate-item-v3 delay-${point.delay} ${index % 2 === 0 ? 'item-left' : 'item-right'}`}>
              <div className="timeline-content-wrapper-v3">
                <div className="timeline-icon-main-wrapper-v3">
                  {React.cloneElement(point.icon, { className: 'timeline-icon-main-v3' })}
                </div>
                <div className="timeline-text-content-v3">
                  <Title level={4} className="timeline-point-title-v3">{point.title}</Title>
                  <Paragraph className="timeline-point-text-v3">{point.text}</Paragraph>
                </div>
              </div>
              <div className="timeline-decorative-graphic-v3">
                {point.graphicElement}
              </div>
            </div>
          ))}
        </div>

        <Row justify="center" className="final-message-row-v3 animate-item-v3 delay-5">
          <Col xs={24} md={20} lg={18}>
            <div className="final-message-card-v3">
              <div className="card-bg-pattern-v3"></div>
              <div className="card-shine-effect"></div>
              <MessageFilled className="final-message-icon-v3" />
              <Title level={3} className="final-message-title-v3">Mais que um Teste, um Salto para o Futuro</Title>
              <Paragraph className="final-message-text-v3">
                O INAMAL é seu aliado para decifrar o presente e construir um futuro de excelência para seu almoxarifado. Descubra seu potencial e lidere a mudança.
              </Paragraph>
              <Paragraph strong className="target-audience-emphasis-v3">
                De almoxarifes a diretores, de pequenas empresas a grandes operações:{' '}
                {/* PASSO 2: Transformar o span em um botão */}
                <Button
                  type="link" // Para parecer um link, mas pode ser 'primary' ou 'default'
                  className="inline-cta-button highlight-text" // Classes para estilização
                  onClick={(e) => handleCheckout(e.currentTarget)}
                  // icon={<PlayCircleOutlined />} // Opcional: adicionar ícone
                >
                  o INAMAL é para quem ousa evoluir.
                </Button>
              </Paragraph>
              <Paragraph className="closing-statement-v3">
                Maturidade logística é <Tag className="emphasis-tag-v3">Consciência em Ação</Tag>.
              </Paragraph>
            </div>
          </Col>
        </Row>

        <Row justify="center" style={{ marginTop: '60px' }} className="animate-item-v3 delay-6">
          <Col>
            <Button
              type="primary"
              size="large"
              className="origin-v3-cta-button" // Este é o botão principal da seção
              icon={<RiseOutlined />}
              // PASSO 3: Garantir que este botão também use handleCheckout
              onClick={(e) => handleCheckout(e.currentTarget)}
            >
              <span>QUERO FAZER PARTE DA MUDANÇA</span>
              <div className="btn-hover-bg"></div>
              <div className="btn-particles">
                {[...Array(10)].map((_, i) => <div key={i} className="particle"></div>)}
              </div>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OriginStorySection;