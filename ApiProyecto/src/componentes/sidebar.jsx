// Importa React y el hook useNavigate para redirecciones
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Importa los estilos específicos para la barra lateral
import './css/sidebar.css'; 

// Componente funcional Sideba
const Sidebar = () => {
  const navigate = useNavigate();

  
// Función que recibe una vista y navega a la ruta correspondiente
  const handleNavigation = (view) => {
    navigate(`/${view}`);
  };

  return (
    <aside className="sidebar" id="sidebar">
      <h2 className="logo">Inicio</h2>
      <nav>
        <ul>
          <li>
            <a onClick={() => handleNavigation('facturacion')} className="menu-button">
              <img src="/imagenes/compra.png" alt="Facturación" className="menu-icon" />
              <span className="menu-label">Facturación</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigation('compras')} className="menu-button">
              <img src="/imagenes/factu.png" alt="Compras" className="menu-icon" />
              <span className="menu-label">Compras</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigation('inventario')} className="menu-button">
              <img src="/imagenes/invent.png" alt="Inventario" className="menu-icon" />
              <span className="menu-label">Inventario</span>
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigation('configuracion')} className="menu-button">
              <img src="/imagenes/config.png" alt="Configuración" className="menu-icon" />
              <span className="menu-label">Configuración</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigate('/')} className="menu-button">
              <img src="/imagenes/salida.png" className="menu-icon" alt="Salir" />
              <span className="menu-label">Salir</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};


// Exporta el componente para ser usado en otros archivos
export default Sidebar;
