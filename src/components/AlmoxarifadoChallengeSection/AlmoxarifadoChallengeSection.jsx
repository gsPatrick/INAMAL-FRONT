// src/components/WarehouseSnapshotSection/WarehouseSnapshotSection.jsx
import React from 'react';
import { Carousel, Card, Typography, Row, Col } from 'antd';
import {
  InboxOutlined,
  BarcodeOutlined,
  UsergroupAddOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';
import './WarehouseSnapshotSection.css';

import warehouseImage1 from '../../assets/images/slider/almoxarifado.jpg';
import warehouseImage2 from '../../assets/images/slider/almoxarifado2.jpg';
import warehouseImage3 from '../../assets/images/slider/almoxarifado3.jpg';
import warehouseImage4 from '../../assets/images/slider/almoxarifado4.jpg';

const { Title, Paragraph } = Typography;

const WarehouseSnapshotSection = () => {
  const sliderImages = [
    { id: 1, src: warehouseImage1, alt: 'Almoxarifado moderno e iluminado' },
    { id: 2, src: warehouseImage2, alt: 'Prateleiras de almoxarifado bem organizadas' },
    { id: 3, src: warehouseImage3, alt: 'Tecnologia sendo usada em um almoxarifado' },
    { id: 4, src: warehouseImage4, alt: 'Equipe trabalhando em um almoxarifado' },
  ];

  const snapshotCards = [
    {
      icon: <InboxOutlined />,
      title: 'Organização Eficaz',
      description: 'Do recebimento à expedição, um fluxo otimizado é crucial.',
      color: '#27ae60',
    },
    {
      icon: <BarcodeOutlined />,
      title: 'Controle e Tecnologia',
      description: 'Sistemas e ferramentas que garantem precisão e agilidade.',
      color: '#2980b9',
    },
    {
      icon: <UsergroupAddOutlined />,
      title: 'Equipes Engajadas',
      description: 'O fator humano como pilar para a excelência operacional.',
      color: '#f39c12',
    },
    {
      icon: <AreaChartOutlined />,
      title: 'Gestão Orientada a Dados',
      description: 'Decisões baseadas em indicadores para melhoria contínua.',
      color: '#8e44ad',
    },
  ];

  const carouselSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    effect: 'fade',
    pauseOnHover: true,
  };

  return (
    <section className="warehouse-snapshot-section modified-layout" id="warehouse-snapshot-section">
      <div className="container">
        {/* Carrossel como elemento separado no topo */}
        <Row justify="center" className="carousel-standalone-row animate-fade-in-up delay-0">
          <Col xs={24} md={22} lg={20}> {/* Controla a largura do carrossel */}
            <Carousel {...carouselSettings} className="warehouse-carousel standalone">
              {sliderImages.map(img => (
                <div key={img.id} className="carousel-slide">
                  <img src={img.src} alt={img.alt} className="carousel-image" />
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Conteúdo textual e cards abaixo do carrossel */}
        <div className="snapshot-text-and-cards-content">
          <Row justify="center" className="section-header-snapshot animate-fade-in-up delay-1">
            <Col>
              <Title level={2} className="section-title-snapshot">
                O Coração da Sua Operação: <span className="highlight-text-snapshot">O Almoxarifado | INAMAL</span>
              </Title>
              <Paragraph className="section-subtitle-snapshot">
                Não importa se você trabalha no estoque, lidera uma equipe ou toma decisões na diretoria: se você quer um almoxarifado mais organizado e que gere resultados, o INAMAL é pra você. Comece agora a transformação do seu setor.
              </Paragraph>
            </Col>
          </Row>

          <Row gutter={[24, 24]} justify="center" style={{ marginTop: '40px' }}>
            {snapshotCards.map((card, index) => (
              <Col xs={24} sm={12} md={6} key={card.title} className={`animate-fade-in-up delay-${index + 2}`}>
                <Card
                  hoverable
                  className="snapshot-card"
                  style={{ '--card-accent-color': card.color }}
                >
                  <div className="snapshot-card-icon-wrapper">
                    {React.cloneElement(card.icon, { className: 'snapshot-card-icon' })}
                  </div>
                  <Title level={4} className="snapshot-card-title">{card.title}</Title>
                  <Paragraph className="snapshot-card-description">{card.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default WarehouseSnapshotSection;