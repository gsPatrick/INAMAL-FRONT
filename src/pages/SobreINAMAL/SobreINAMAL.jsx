// src/pages/SobrePage/SobrePage.jsx
import React from 'react';
import { Layout, Typography, Row, Col, List, Tag, Divider, Space } from 'antd';
import {
  InfoCircleOutlined,
  ProfileOutlined,      // Para Questionário Objetivo
  ExperimentOutlined,     // Para Análise com IA (ou algo como SolutionOutlined)
  FileTextOutlined,       // Para Relatório Personalizado
  CheckSquareOutlined,    // Para itens de checklist (o que o relatório inclui)
  TeamOutlined,           // Para público-alvo
  RightCircleOutlined,    // Para destacar pontos
  BarChartOutlined,       // Maturidade Geral
  ApartmentOutlined,      // Diagnóstico por Área
  BulbOutlined            // Sugestões Práticas
} from '@ant-design/icons';
import './SobrePage.css'; // Usaremos um novo conjunto de estilos

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const oQueEInamalFeatures = [
  {
    icon: <ProfileOutlined />,
    title: 'Questionário Objetivo',
    description: 'Responda a perguntas claras e diretas para mapear a realidade do seu almoxarifado.',
  },
  {
    icon: <ExperimentOutlined />,
    title: 'Análise com Inteligência Artificial',
    description: 'Nossa IA processa suas respostas, identificando padrões e níveis de maturidade.',
  },
  {
    icon: <FileTextOutlined />,
    title: 'Relatório Personalizado e Imediato',
    description: 'Receba um diagnóstico completo com insights acionáveis em poucos segundos.',
  },
];

const relatorioIncluiItems = [
  { icon: <BarChartOutlined />, text: 'Sua nota de maturidade geral do almoxarifado.' },
  { icon: <ApartmentOutlined />, text: 'Diagnóstico detalhado por área chave (recebimento, controle, armazenagem, tecnologia, pessoas).' },
  { icon: <BulbOutlined />, text: 'Sugestões práticas e priorizadas para otimizar cada área identificada.' },
];

const publicoAlvoTags = [
  'Gestores de Logística', 'Supervisores de Almoxarifado', 'Diretores de Operações',
  'Consultores de Supply Chain', 'Operadores Logísticos', 'Profissionais de Estoque',
  'Empresários (PME)',
];

const SobrePage = () => {
  return (
    <Layout className="sobre-page-minimal-layout">
      <Content className="sobre-page-minimal-content">
        <div className="content-wrapper-minimal">

          <section className="hero-section-minimal">
            <Space direction="vertical" size="small" align="center">
              <Title level={1} className="main-title-minimal">
                <InfoCircleOutlined style={{ marginRight: '12px', color: '#21436e' }} />
                Conheça o INAMAL
              </Title>
              <Paragraph className="subtitle-minimal">
                O <strong>INAMAL (Índice Nacional de Maturidade de Almoxarifados)</strong> é a sua ferramenta estratégica
                para diagnosticar e elevar a performance do seu almoxarifado.
              </Paragraph>
              <Paragraph className="description-minimal">
                Avalie a organização, eficiência e controle do seu setor de forma rápida, acessível e
                receba um plano claro para a evolução.
              </Paragraph>
            </Space>
          </section>

          <Divider className="minimal-divider" />

          <section className="features-section-minimal">
            <Title level={3} className="section-title-minimal">Como o INAMAL Transforma seu Almoxarifado</Title>
            <Row gutter={[40, 40]}>
              {oQueEInamalFeatures.map((feature, index) => (
                <Col xs={24} sm={24} md={8} key={index}>
                  <div className="feature-item-minimal">
                    <div className="feature-icon-minimal">
                      {feature.icon}
                    </div>
                    <Title level={4} className="feature-title-minimal">{feature.title}</Title>
                    <Paragraph className="feature-description-minimal">{feature.description}</Paragraph>
                  </div>
                </Col>
              ))}
            </Row>
          </section>

          <Divider className="minimal-divider" />

          <section className="report-section-minimal">
            <Row gutter={[40, 24]} align="middle">
              <Col xs={24} md={10}>
                <img
                  src="https://via.placeholder.com/400x300/21436e/FFFFFF?text=Visual+Relat%C3%B3rio+INAMAL" // Placeholder para imagem do relatório
                  alt="Exemplo do Relatório INAMAL"
                  className="report-image-minimal"
                />
              </Col>
              <Col xs={24} md={14}>
                <Title level={3} className="section-title-minimal left-align-title">Seu Diagnóstico Completo</Title>
                <Paragraph className="description-minimal">
                  O relatório gerado pelo INAMAL é mais que um simples score. É um guia detalhado para a melhoria contínua:
                </Paragraph>
                <List
                  itemLayout="horizontal"
                  dataSource={relatorioIncluiItems}
                  renderItem={item => (
                    <List.Item className="report-list-item-minimal">
                      <Space align="start">
                        <span className="report-list-icon">{item.icon}</span>
                        <Text className="report-list-text">{item.text}</Text>
                      </Space>
                    </List.Item>
                  )}
                />
                 <Paragraph className="report-cta-text-minimal">
                  Tudo isso de forma automatizada, com linguagem clara e foco em resultados práticos.
                </Paragraph>
              </Col>
            </Row>
          </section>

          <Divider className="minimal-divider" />

          <section className="audience-section-minimal">
            <Title level={3} className="section-title-minimal">
              <TeamOutlined style={{ marginRight: '10px' }} />
              Para Quem é o INAMAL?
            </Title>
            <Paragraph className="description-minimal audience-description">
              Se você busca otimizar processos, reduzir custos, engajar sua equipe e transformar
              o almoxarifado em um diferencial competitivo, o INAMAL é para você. Ideal para:
            </Paragraph>
            <div className="audience-tags-minimal">
              {publicoAlvoTags.map(tag => (
                <Tag key={tag} className="audience-tag-minimal">
                  {tag}
                </Tag>
              ))}
            </div>
          </section>

        </div>
      </Content>
    </Layout>
  );
};

export default SobrePage;