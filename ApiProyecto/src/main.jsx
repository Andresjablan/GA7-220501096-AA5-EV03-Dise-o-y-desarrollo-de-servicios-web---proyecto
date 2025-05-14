// Importación de las librerías principales de React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importación de componentes para el manejo de rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación de componentes personalizados
import App from './App.jsx';
import MenuPrincipal from './MenuPrincipal.jsx';
import RegistroUsuario from './RegistroUsuario.jsx';
import Usuarios from './Usuarios.jsx';

// Renderiza el componente principal en el elemento con id 'root' en el HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPrincipal />} />
        <Route path="/register" element={<RegistroUsuario />} />
        <Route path="/UserList" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
