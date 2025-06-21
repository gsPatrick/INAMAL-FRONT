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

const { Header: AntHeader } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false); // Para efeito de encolher ao rolar

  const menuItemsData = [
    { key: '1', label: 'Sobre o INAMAL', icon: <ReadOutlined />, path: '/#about-inamal-section' },
    { key: '2', label: 'Como Funciona', icon: <QuestionCircleOutlined />, path: '/#how-it-works-section' },
    { key: '3', label: 'O que está incluído', icon: <ContainerOutlined />, path: '/#what-you-get-section' },
    { key: '4', label: 'Como surgiu', icon: <TeamOutlined />, path: '/#origin-story-section' },
  ];

  const ctaMenuItem = { key: '0', label: 'FAZER DIAGNÓSTICO', icon: <ExperimentOutlined />, path: '/#hero-section' };

  // Efeito de encolher header ao rolar (opcional)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Começa a encolher após 50px de scroll
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
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
  let matchedItem = menuItemsData.find(item => item.path === currentFullPath);

  if (matchedItem) {
    activeKey = matchedItem.key;
  } else if (ctaMenuItem.path === currentFullPath) {
    activeKey = ctaMenuItem.key;
  } else if (location.pathname === '/' && !location.hash && ctaMenuItem.path === '/#hero-section') {
    activeKey = ctaMenuItem.key;
  } else if (!activeKey) {
     activeKey = ctaMenuItem.key;
  }

  const handleMenuClick = (path) => {
    const [pathnameOnly, hashFragment] = path.split('#');
    if (drawerVisible) {
      setDrawerVisible(false);
    }
    const performScroll = (targetId) => {
      setTimeout(() => {
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, drawerVisible ? 300 : 0);
    };
    if (location.pathname === pathnameOnly || (pathnameOnly === '/' && location.pathname === '')) {
      performScroll(hashFragment);
    } else {
      navigate(pathnameOnly || '/');
      setTimeout(() => {
        performScroll(hashFragment);
      }, 100);
    }
  };

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
            onClick={() => handleMenuClick(ctaMenuItem.path)}
            className="menu-item-cta-drawer"
          >
            {ctaMenuItem.label}
          </Menu.Item>
        )}
        {menuItemsData.map(item => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            onClick={() => handleMenuClick(item.path)}
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
          onClick={() => handleMenuClick(ctaMenuItem.path)}
          className={`menu-item-cta-desktop ${activeKey === ctaMenuItem.key ? 'ant-menu-item-selected active-cta' : ''}`}
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
            <Avatar src={logoSrc} alt="INAMAL Logo" style={{ marginRight: 12, verticalAlign: 'middle' }} size={40} /> {/* Logo no drawer */}
            <span style={{ verticalAlign: 'middle', fontWeight: 600, color: '#21436e'}}>INAMAL</span>
          </Link>
        }
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="app-menu-drawer-v3"
        bodyStyle={{ padding: 0 }}
        width={300} // Drawer um pouco mais largo
      >
        {renderMenuItems(true)}
      </Drawer>
    </AntHeader>
  );
};

export default AppHeader;