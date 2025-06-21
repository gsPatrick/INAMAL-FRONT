// src/components/HowItWorksSection/HowItWorksSection.jsx
import React from 'react';
import { Typography, Row, Col, Button } from 'antd';
import {
  BookOutlined,
  FormOutlined,
  RobotOutlined,
  DollarCircleOutlined,
  LikeOutlined,
  MailOutlined,
  ExperimentOutlined,
  // ArrowRightOutlined (Removido, pois a linha de fundo já faz a conexão)
  SettingFilled // Exemplo de ícone para elemento gráfico
} from '@ant-design/icons';
import './HowItWorksSection.css';

const { Title, Paragraph } = Typography;

const HowItWorksSection = () => {
  const stepsData = [
    {
      icon: <BookOutlined />,
      title: 'Experiência de Mercado',
      description: 'Baseado em +15 anos de consultoria, identificamos padrões chave que impactam os resultados.',
      delay: 2,
    },
    {
      icon: <FormOutlined />,
      title: 'Seu Diagnóstico Detalhado',
      description: 'Responda a um questionário estratégico sobre os 5 pilares da maturidade do almoxarifado.',
      delay: 3,
    },
    {
      icon: <RobotOutlined />,
      title: 'Análise com Inteligência Artificial',
      description: 'Nossa IA processa suas respostas, gerando um diagnóstico preciso e sugestões práticas.',
      delay: 4,
    },
    {
      icon: <DollarCircleOutlined />,
      title: 'Acesso Imediato Pós-Pagamento',
      description: 'O teste custa R$ 67,90. Após a confirmação, o link do questionário é liberado na hora.',
      delay: 5,
    },
    {
      icon: <LikeOutlined />,
      title: 'A Importância da Sinceridade',
      description: 'Respostas honestas garantem um relatório que reflete sua realidade e insights valiosos.',
      delay: 6,
    },
    {
      icon: <MailOutlined />,
      title: 'Relatório Completo no Seu E-mail',
      description: 'Receba o diagnóstico personalizado e o plano de ação diretamente na sua caixa de entrada.',
      delay: 7,
    },
  ];

  return (
    <div className="how-it-works-refined-section" id="how-it-works-section">
      <div className="container">
        <Row justify="center" className="section-header animate-fade-in-up-hw delay-0">
          <Col>
            <Title level={2} className="section-title">
              Como Funciona o <span className="highlight-text">INAMAL</span>?
            </Title>
            <Paragraph className="section-subtitle">
              Um processo transparente e eficiente, pensado para sua evolução.
            </Paragraph>
          </Col>
        </Row>

        <div className="refined-steps-wrapper">
          <div className="connecting-line-bg animate-grow-line delay-1"></div> {/* Animação de crescimento adicionada aqui */}
          {stepsData.map((step, index) => (
            <div
              key={step.title}
              className={`refined-step-item animate-step-item-in delay-${step.delay}`}
            >
              <div className="step-item-graphic-element graphic-top-left">
                <SettingFilled />
              </div>
              <div className="step-item-icon-wrapper">
                {React.cloneElement(step.icon, { className: 'step-item-icon' })}
                <div className="step-number-badge">{index + 1}</div>
              </div>
              <div className="step-item-content">
                <Title level={4} className="step-item-title">{step.title}</Title>
                <Paragraph className="step-item-description">{step.description}</Paragraph>
              </div>
              <div className="step-item-graphic-element graphic-bottom-right">
                 {/* Outro elemento gráfico, pode ser um ícone ou forma CSS */}
                 <svg width="20" height="20" viewBox="0 0 100 100" className="graphic-svg-dots">
                    <circle cx="20" cy="20" r="8" />
                    <circle cx="50" cy="50" r="8" />
                    <circle cx="80" cy="80" r="8" />
                    <circle cx="20" cy="80" r="8" />
                    <circle cx="80" cy="20" r="8" />
                 </svg>
              </div>
            </div>
          ))}
        </div>

        <Row justify="center" style={{ marginTop: '70px' }} className={`animate-fade-in-up-hw delay-${stepsData.length + 3}`}> {/* Ajustado delay */}
          <Col>
            <Button type="primary" size="large" className="how-it-works-cta-button-v2" icon={<ExperimentOutlined />}>
              QUERO FAZER O TESTE AGORA
            </Button>
          </Col>
        </Row>
      </div>
      <div className="decorative-pulse-circle circle-bg-1"></div>
      <div className="decorative-pulse-circle circle-bg-2"></div>
    </div>
  );
};

export default HowItWorksSection;