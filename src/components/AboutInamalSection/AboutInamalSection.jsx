// src/components/AboutInamalSection/AboutInamalSection.jsx
import React from 'react';
import { Typography, Row, Col, Button, Card } from 'antd';
import {
  GlobalOutlined,     // Para "Índice Nacional"
  ExperimentOutlined, // Para "Diagnóstico" ou "Análise"
  FileDoneOutlined,   // Para "Relatório Personalizado"
  TeamOutlined,       // Para "Ideal para..."
  RiseOutlined,       // Para "Evoluir o setor"
  CheckCircleFilled   // Para itens de lista
} from '@ant-design/icons';
import './AboutInamalSection.css';
import { handleCheckout } from '../../services/checkoutService';

const { Title, Paragraph } = Typography;

const AboutInamalSection = () => {
  const benefits = [
    {
      icon: <FileDoneOutlined />,
      title: 'Sua Nota de Maturidade',
      description: 'Receba uma pontuação clara sobre o nível atual do seu almoxarifado.',
      delay: 3
    },
    {
      icon: <ExperimentOutlined />,
      title: 'Diagnóstico Detalhado',
      description: 'Análise por área: recebimento, controle, armazenagem, tecnologia e pessoas.',
      delay: 4
    },
    {
      icon: <RiseOutlined />,
      title: 'Ações Práticas para Evoluir',
      description: 'Sugestões personalizadas para otimizar processos e resultados.',
      delay: 5
    }
  ];

  return (
    <div className="about-inamal-section-v2" id="about-inamal-section">
      <div className="container">
        <Row justify="center" className="section-header animate-fade-in-up delay-0">
          <Col>
            <Title level={2} className="section-title">
              O que é o <span className="highlight-text">INAMAL</span>?
            </Title>
            <Paragraph className="section-subtitle">
              Uma ferramenta estratégica para transformar a gestão do seu almoxarifado.
            </Paragraph>
          </Col>
        </Row>

        <Row gutter={[32, 48]} align="center" style={{ marginTop: '50px' }}>
          <Col xs={24} md={10} lg={8} className="about-graphic-col animate-fade-in-left delay-1">
            {/* Elemento gráfico usando ícones e formas */}
            <div className="inamal-concept-graphic">
              <div className="graphic-bg-shape shape-1"></div>
              <div className="graphic-bg-shape shape-2"></div>
              <GlobalOutlined className="main-graphic-icon" />
              <div className="sub-icon icon-tool">
                <ExperimentOutlined />
              </div>
              <div className="sub-icon icon-report">
                <FileDoneOutlined />
              </div>
            </div>
          </Col>

          <Col xs={24} md={14} lg={16} className="about-text-col animate-fade-in-right delay-2">
            <Paragraph className="intro-paragraph">
              O <strong>INAMAL – Índice Nacional de Maturidade de Almoxarifados</strong> – é uma plataforma inovadora que avalia a organização, eficiência e controle do seu almoxarifado de forma rápida, acessível e inteligente.
            </Paragraph>
            <Paragraph>
              Através de um questionário objetivo, suas respostas são processadas por inteligência artificial, gerando em segundos um diagnóstico completo e prático.
            </Paragraph>
            <div className="target-audience-box">
              <TeamOutlined className="target-audience-icon"/>
              <div>
                <Title level={5} style={{ margin: 0, color: '#21436e' }}>Ideal para quem busca excelência em estoque:</Title>
                <Paragraph style={{ marginBottom: 0, fontSize: '0.95rem' }}>
                  Gestores, supervisores, diretores, consultores, operadores logísticos e todos os profissionais que desejam elevar o nível do seu almoxarifado.
                </Paragraph>
              </div>
            </div>
          </Col>
        </Row>

        <Row gutter={[24, 24]} style={{ marginTop: '60px' }}>
          {benefits.map((benefit) => (
            <Col xs={24} sm={12} lg={8} key={benefit.title} className={`animate-fade-in-up delay-${benefit.delay}`}>
              <Card hoverable className="benefit-card">
                <div className="benefit-icon-wrapper">
                  {React.cloneElement(benefit.icon, { className: 'benefit-icon' })}
                </div>
                <Title level={4} className="benefit-title">{benefit.title}</Title>
                <Paragraph className="benefit-description">{benefit.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
        <Row justify="center" className={`animate-fade-in-up delay-${benefits.length + 3}`}>
            <Paragraph className="automated-info">
                <CheckCircleFilled style={{ color: '#52c41a', marginRight: '8px' }}/>
                Tudo isso de forma automatizada, sem complicação e com linguagem clara.
            </Paragraph>
        </Row>

        <Row justify="center" style={{ marginTop: '50px' }} className={`animate-fade-in-up delay-${benefits.length + 4}`}>
          <Col>
            <Button 
              type="primary" 
              size="large" 
              className="about-v2-cta-button" 
              icon={<ExperimentOutlined />}
              // MODIFICAÇÃO AQUI
              onClick={(e) => handleCheckout(e.currentTarget)}
            >
              QUERO FAZER O DIAGNÓSTICO AGORA
            </Button>
          </Col>
        </Row>

      </div>
      {/* Elementos decorativos de fundo sutis */}
      <div className="decorative-bg-element element-1"></div>
      <div className="decorative-bg-element element-2"></div>
    </div>
  );
};

export default AboutInamalSection;