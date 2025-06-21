// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/Header/Header'; // Nosso Header horizontal
import LandingPage from './pages/LandingPage/LandingPage';
import SobreINAMAL from './pages/SobreINAMAL/SobreINAMAL'; // Conteúdo desta página não fornecido
import AppFooter from './components/Footer/Footer';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    // BrowserRouter foi movido para main.jsx, remova-o daqui se já estiver lá
    // <BrowserRouter>
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppHeader /> {/* Header horizontal no topo */}
      <Layout className="site-layout-content-wrapper"> {/* Wrapper para Content e Footer */}
        <Content className="main-content"> {/* Conteúdo principal onde as páginas são renderizadas */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sobre" element={<SobreINAMAL />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Content>
        <AppFooter /> {/* Footer renderizado após o Content principal */}
      </Layout>
    </Layout>
    // </BrowserRouter>
  );
}

export default App;