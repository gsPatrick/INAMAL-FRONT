// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Para estilos globais
import { BrowserRouter } from 'react-router-dom';

// Importando o CSS global do Ant Design
import 'antd/dist/reset.css'; // ou a versão mais recente, ex: antd/dist/antd.min.css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);