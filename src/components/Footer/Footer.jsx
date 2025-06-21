// src/components/Footer/Footer.jsx
import React from 'react';
import { Typography, Row, Col } from 'antd';
import { CodeOutlined, HeartFilled } from '@ant-design/icons';
import './Footer.css'; // Continuaremos usando este nome de arquivo

const { Text, Link: AntLink } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer-v4 animate-footer-in"> {/* Nova classe para v4 */}
      {/* Elementos de fundo idênticos ou muito similares à OriginStory v3 */}
      <div className="footer-bg-dots-pattern-v4"></div>
      <div className="footer-bg-gradient-overlay-v4"></div>
      <div className="footer-bg-blur-shape shape-footer-1-v4"></div>
      <div className="footer-bg-blur-shape shape-footer-2-v4"></div>


      <div className="footer-container-v4">
        <Row justify="space-between" align="middle" gutter={[16, 16]}> {/* gutter ajustado */}
          <Col xs={24} sm={24} md={12} className="footer-copyright-v4">
            <Text>
              © {currentYear} INAMAL. Todos os direitos reservados.
            </Text>
          </Col>
          <Col xs={24} sm={24} md={12} className="footer-credits-v4">
            <Text className="developed-by-v4">
              Desenvolvido com <HeartFilled className="heart-icon-v4" /> por{' '}
              <AntLink href="https://codebypatrick.dev" target="_blank" rel="noopener noreferrer" className="developer-link-v4">
                Patrick.Developer <CodeOutlined />
              </AntLink>
            </Text>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;