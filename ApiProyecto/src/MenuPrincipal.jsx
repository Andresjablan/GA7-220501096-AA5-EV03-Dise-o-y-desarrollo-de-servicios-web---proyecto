// Importación de React y del componente Sidebar (barra lateral de navegación)
import React from 'react';
import Sidebar from './componentes/sidebar';

// Importación de hojas de estilo
import './css/menu.css';
import './css/general.css';

function MenuPrincipal() {
  return (
    <div className="menu-principal">
      <Sidebar />

      {/* Logos */}
      <div id="Logo_AI">
        <img src="/imagenes/LogoAI.png" alt="Logo Empresa" className="logo-img" />
      </div>
      <div id="Logo_MF">
        <img src="/imagenes/LogoMF.png" alt="Logo" className="logo-img" />
      </div>
    </div>
  );
}

// Exporta el componente para poder usarlo en otras partes de la app
export default MenuPrincipal;

