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
import { handleCheckout } from '../../services/checkoutService'; // Garantir que o caminho está correto

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

  // Identificador para o item de menu/botão que aciona o checkout
  const ctaTriggerPath = '/trigger-checkout';
  const ctaMenuItem = { key: 'cta-checkout', label: 'FAZER DIAGNÓSTICO', icon: <ExperimentOutlined />, path: ctaTriggerPath };

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  let activeKey = '';
  const currentFullPath = location.pathname + location.hash;
  const matchedItem = menuItemsData.find(item => item.path === currentFullPath);
  if (matchedItem) {
    activeKey = matchedItem.key;
  }

  const processCheckout = (targetElement) => {
    console.log('[Header] Processando checkout. Elemento alvo:', targetElement);
    if (typeof handleCheckout === 'function') {
      try {
        handleCheckout(targetElement);
        console.log('[Header] handleCheckout chamado com sucesso.');
      } catch (error) {
        console.error('[Header] Erro ao chamar handleCheckout:', error);
      }
    } else {
      console.error('[Header] ERRO: handleCheckout não é uma função ou não foi importada corretamente.');
    }
    if (drawerVisible) {
      setDrawerVisible(false);
    }
  };

  const handleNavigationAndScroll = (path) => {
    console.log('[Header] Navegando ou scrollando para:', path);
    if (drawerVisible) {
      setDrawerVisible(false);
    }

    const [pathnameOnly, hashFragment] = path.split('#');

    const performScroll = (targetId) => {
      setTimeout(() => {
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = isHeaderScrolled ? 80 : 120; // Ajusta o offset baseado no estado do header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          } else {
            console.warn(`[Header] Elemento com ID '${targetId}' não encontrado para scroll.`);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Fallback para o topo
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, drawerVisible ? 250 : 0); // Pequeno delay para drawer fechar
    };

    if (location.pathname === (pathnameOnly || '/') && hashFragment) {
      performScroll(hashFragment);
    } else if (pathnameOnly === '/' && !hashFragment) { // Link para a home (topo)
        navigate('/');
        performScroll(); // Scroll para o topo
    } else {
      navigate(pathnameOnly || '/');
      if (hashFragment) {
        // Espera um pouco para a nova página carregar antes de tentar o scroll
        // Idealmente, isso seria tratado com um estado de "loading" ou callback da navegação
        setTimeout(() => performScroll(hashFragment), 200);
      } else {
        setTimeout(() => performScroll(), 200); // Scroll para o topo da nova página
      }
    }
  };


  const renderMenuItems = (inDrawer = false) => {
    // Itens de menu para o Ant Design Menu component
    const antdMenuItems = [
      // Adiciona o item CTA primeiro se estiver no drawer
      ...(inDrawer ? [{
        key: ctaMenuItem.key,
        icon: ctaMenuItem.icon,
        label: ctaMenuItem.label,
        className: 'menu-item-cta-drawer', // Classe específica para estilização no drawer
        onClick: (e) => { // e aqui é o evento do Ant Design Menu ({ item, key, keyPath, domEvent })
          console.log('[Header] CTA Drawer clicado. Evento AntD:', e);
          processCheckout(e.domEvent.target.closest('li')); // Passa o elemento <li>
        }
      }] : []),
      ...menuItemsData.map(item => ({
        key: item.key,
        icon: item.icon,
        label: item.label,
        onClick: () => handleNavigationAndScroll(item.path)
      }))
    ];

    return (
      <>
        <Menu
          mode={inDrawer ? 'inline' : 'horizontal'}
          selectedKeys={[activeKey]}
          items={antdMenuItems} // Usa a propriedade 'items'
          className={`app-menu ${inDrawer ? 'drawer-menu' : 'horizontal-menu'}`}
          theme="light"
          // O onClick nos items individuais já lida com as ações
        />
        {!inDrawer && (
          <Button
            key={ctaMenuItem.key} // Chave para React, não necessariamente para lógica de menu aqui
            type="primary"
            icon={ctaMenuItem.icon}
            onClick={(e) => {
              console.log('[Header] CTA Desktop (Button) clicado. Evento DOM:', e);
              processCheckout(e.currentTarget); // Passa o elemento <button>
            }}
            className="menu-item-cta-desktop"
          >
            {ctaMenuItem.label}
          </Button>
        )}
      </>
    );
  };


  const handleLogoClick = (e) => {
    e.preventDefault();
    if (drawerVisible) {
      setDrawerVisible(false);
    }
    handleNavigationAndScroll('/'); // Leva para o topo da página inicial
  };

  return (
    <AntHeader className={`app-header-horizontal-v3 ${isHeaderScrolled ? 'scrolled' : ''}`}>
      <Row justify="space-between" align="middle" style={{ height: '100%', width: '100%'}} wrap={false}>
        <Col flex="none" className="logo-container-horizontal-v3">
          <Link to="/" onClick={handleLogoClick}>
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
              aria-label="Abrir menu"
            />
          ) : (
            renderMenuItems(false)
          )}
        </Col>
      </Row>
      <Drawer
        title={
          <Link to="/" onClick={handleLogoClick}>
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
        closeIcon={<MenuOutlined style={{color: '#1e3a8a', fontSize: '20px'}}/>} // Exemplo de ícone de fechar, ajuste
      >
        {renderMenuItems(true)}
      </Drawer>
    </AntHeader>
  );
};

export default AppHeader;