// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Row, Col, Avatar } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ReadOutlined,
  ExperimentOutlined,
  QuestionCircleOutlined,
  ContainerOutlined,
  TeamOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import './Header.css';
import logoSrc from '../../assets/images/logo.png';
// PASSO 1: Importar a função de checkout
import { handleCheckout } from '../../services/checkoutService';

const { Header: AntHeader } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  const menuItemsData = [
    { key: '1', label: 'Sobre o INAMAL', icon: <ReadOutlined />, path: '/#about-inamal-section' },
    { key: '2', label: 'Como Funciona', icon: <QuestionCircleOutlined />, path: '/#how-it-works-section' },
    { key: '3', label: 'O que está incluído', icon: <ContainerOutlined />, path: '/#what-you-get-section' },
    { key: '4', label: 'Como surgiu', icon: <TeamOutlined />, path: '/#origin-story-section' },
  ];

  // PASSO 2: Mudar o path do CTA para um identificador único que não seja um hash de scroll
  const ctaMenuItem = { key: '0', label: 'FAZER DIAGNÓSTICO', icon: <ExperimentOutlined />, path: '/checkout' };

  // Lógica para efeito de scroll (mantida)
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lógica para responsividade (mantida)
  useEffect(() => {
    const handleResize = () => {
      const mobileState = window.innerWidth < 992;
      if (mobileState !== isMobile) {
        setIsMobile(mobileState);
        if (!mobileState && drawerVisible) {
          setDrawerVisible(false);
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, drawerVisible]);

  // Lógica para definir a chave ativa do menu (ajustada para ignorar o CTA)
  let activeKey = '';
  const currentFullPath = location.pathname + location.hash;
  const matchedItem = menuItemsData.find(item => item.path === currentFullPath);
  if (matchedItem) {
    activeKey = matchedItem.key;
  }

  // PASSO 3: Criar a função de clique no menu que diferencia o checkout dos links de scroll
  const handleMenuClick = (path, event) => {
    // Se o path for o nosso path especial de checkout, chama a função e para a execução
    if (path === '/checkout') {
      // Passamos o elemento do botão para a função de checkout
      handleCheckout(event.currentTarget); 
      return;
    }

    // Se não for o checkout, executa a lógica de scroll normal
    const [pathnameOnly, hashFragment] = path.split('#');
    
    if (drawerVisible) {
      setDrawerVisible(false);
    }

    const performScroll = (targetId) => {
      // Adiciona um pequeno delay para o drawer fechar antes do scroll
      setTimeout(() => {
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            // A altura do header encolhido é 80px, vamos considerar isso no scroll
            const headerOffset = 80; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, drawerVisible ? 300 : 0);
    };

    if (location.pathname === (pathnameOnly || '/')) {
      performScroll(hashFragment);
    } else {
      navigate(pathnameOnly || '/');
      // Espera um pouco para a nova página carregar antes de tentar o scroll
      setTimeout(() => {
        performScroll(hashFragment);
      }, 100);
    }
  };

  // PASSO 4: Renderizar os itens do menu, passando o evento de clique para o handler
  const renderMenuItems = (inDrawer = false) => (
    <>
      <Menu
        mode={inDrawer ? 'inline' : 'horizontal'}
        selectedKeys={[activeKey]}
        className={`app-menu ${inDrawer ? 'drawer-menu' : 'horizontal-menu'}`}
        theme="light"
      >
        {inDrawer && (
          <Menu.Item
            key={ctaMenuItem.key}
            icon={ctaMenuItem.icon}
            onClick={(e) => handleMenuClick(ctaMenuItem.path, e.domEvent.target.closest('li'))}
            className="menu-item-cta-drawer"
          >
            {ctaMenuItem.label}
          </Menu.Item>
        )}
        {menuItemsData.map(item => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            onClick={(e) => handleMenuClick(item.path, e.domEvent.target.closest('li'))}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
      {!inDrawer && (
        <Button
          key={ctaMenuItem.key}
          type="primary"
          icon={ctaMenuItem.icon}
          onClick={(e) => handleMenuClick(ctaMenuItem.path, e.currentTarget)}
          className="menu-item-cta-desktop"
        >
          {ctaMenuItem.label}
        </Button>
      )}
    </>
  );

  return (
    <AntHeader className={`app-header-horizontal-v3 ${isHeaderScrolled ? 'scrolled' : ''}`}>
      <Row justify="space-between" align="middle" style={{ height: '100%', width: '100%'}} wrap={false}>
        <Col flex="none" className="logo-container-horizontal-v3">
          <Link to="/" onClick={(e) => { e.preventDefault(); handleMenuClick('/'); }}>
            <Avatar src={logoSrc} alt="INAMAL Logo" className="logo-image-v3" />
          </Link>
        </Col>

        <Col flex="auto" className="menu-container-horizontal-v3">
          {isMobile ? (
            <Button
              className="menu-drawer-button-v3"
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
            />
          ) : (
            renderMenuItems(false)
          )}
        </Col>
      </Row>
      <Drawer
        title={
          <Link to="/" onClick={(e) => { e.preventDefault(); handleMenuClick('/'); setDrawerVisible(false); }}>
            <Avatar src={logoSrc} alt="INAMAL Logo" style={{ marginRight: 12, verticalAlign: 'middle' }} size={40} />
            <span style={{ verticalAlign: 'middle', fontWeight: 600, color: '#21436e'}}>INAMAL</span>
          </Link>
        }
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="app-menu-drawer-v3"
        bodyStyle={{ padding: 0 }}
        width={300}
      >
        {renderMenuItems(true)}
      </Drawer>
    </AntHeader>
  );
};

export default AppHeader;