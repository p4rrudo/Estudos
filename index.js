import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globais
import App from './App'; // Componente principal
import reportWebVitals from './reportWebVitals'; // Para métricas de desempenho

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); // Opcional
