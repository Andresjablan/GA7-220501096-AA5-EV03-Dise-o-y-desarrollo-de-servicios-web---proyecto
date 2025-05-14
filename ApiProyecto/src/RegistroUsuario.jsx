import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/registro.css';
import './css/general.css';
import logoAI from './imagenes/LogoAI.png';
import logoMF from './imagenes/LogoMF.png';

function RegistroUsuario() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [num_documento, setNumDocumento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [rol, setRol] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/usuarios', {
        nombre,
        apellido,
        num_documento,
        telefono,
        email,
        direccion,
        rol,
        contrasena,
      });
      console.log(response.data);
      

      setMensaje('Usuario registrado con éxito');
      setNombre('');
      setApellido('');
      setNumDocumento('');
      setTelefono('');
      setEmail('');
      setDireccion('');
      setRol('');
      setContrasena('');
    } catch (error) {
      console.error('Error al registrar:', error);
      setMensaje('Ocurrió un error al registrar el usuario');
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>

      {/* Sección de logos */}
      <div className="logo-container">
        <div id="Logo_AI">
          <img src={logoAI} alt="Logo Empresa AI" width="150" height="150" />
        </div>
        <div id="Logo_MF">
          <img src={logoMF} alt="Logo MF" width="150" height="150" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-scroll">
        <div className="form-grid">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Num_documento"
            value={num_documento}
            onChange={(e) => setNumDocumento(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
          <select
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
          >
            <option value="">Selecciona un rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Vendedor">Vendedor</option>
            <option value="usuario">Usuario</option>
          </select>
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit">Registrar</button>
          <button type="button" onClick={() => navigate('/UserList')}>Gestion Usuarios</button>
          <button type="button" onClick={() => navigate('/')}>Volver</button>
        </div>

        {mensaje && <p style={{ marginTop: '10px', color: 'green' }}>{mensaje}</p>}
      </form>
    </div>
  );
}

export default RegistroUsuario;

