// src/components/WarehouseSnapshotSection/WarehouseSnapshotSection.jsx
import React from 'react';
import { Carousel, Card, Typography, Row, Col } from 'antd';
import {
  InboxOutlined, // Para recebimento/organização
  BarcodeOutlined, // Para controle/tecnologia
  UsergroupAddOutlined, // Para equipe/pessoas
  ToolOutlined, // Para processos/ferramentas
  AreaChartOutlined, // Para eficiência/dados
} from '@ant-design/icons';
import './WarehouseSnapshotSection.css';

// Importe suas imagens aqui - substitua pelos caminhos corretos
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
      color: '#27ae60', // Verde
    },
    {
      icon: <BarcodeOutlined />,
      title: 'Controle e Tecnologia',
      description: 'Sistemas e ferramentas que garantem precisão e agilidade.',
      color: '#2980b9', // Azul
    },
    {
      icon: <UsergroupAddOutlined />,
      title: 'Equipes Engajadas',
      description: 'O fator humano como pilar para a excelência operacional.',
      color: '#f39c12', // Laranja
    },
    {
      icon: <AreaChartOutlined />,
      title: 'Gestão Orientada a Dados',
      description: 'Decisões baseadas em indicadores para melhoria contínua.',
      color: '#8e44ad', // Roxo
    },
  ];

  const carouselSettings = {
    autoplay: true,
    autoplaySpeed: 5000, // 5 segundos
    dots: true, // Mostrar pontos de navegação
    effect: 'fade', // Efeito de transição (pode ser 'scroll' também)
    pauseOnHover: true,
  };

  return (
    <section className="warehouse-snapshot-section" id="warehouse-snapshot-section">
      <div className="carousel-background-wrapper">
        <Carousel {...carouselSettings} className="warehouse-carousel">
          {sliderImages.map(img => (
            <div key={img.id} className="carousel-slide">
              <img src={img.src} alt={img.alt} className="carousel-image" />
              <div className="carousel-image-overlay"></div> {/* Overlay para escurecer um pouco */}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="snapshot-content-overlay">
        <div className="container">
          <Row justify="center" className="section-header-snapshot animate-fade-in-up delay-0">
            <Col>
              <Title level={2} className="section-title-snapshot">
                O Coração da Sua Operação: <span className="highlight-text-snapshot">O Almoxarifado</span>
              </Title>
              <Paragraph className="section-subtitle-snapshot">
                Explore os elementos chave que definem um almoxarifado eficiente, organizado e pronto para os desafios do mercado.
              </Paragraph>
            </Col>
          </Row>

          <Row gutter={[24, 24]} justify="center" style={{ marginTop: '40px' }}>
            {snapshotCards.map((card, index) => (
              <Col xs={24} sm={12} md={6} key={card.title} className={`animate-fade-in-up delay-${index + 1}`}>
                <Card
                  hoverable
                  className="snapshot-card"
                  style={{ '--card-accent-color': card.color }} // Passando a cor como CSS variable
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