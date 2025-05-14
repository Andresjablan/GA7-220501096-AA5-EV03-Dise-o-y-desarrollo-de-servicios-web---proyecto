const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

//conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Andres-0712',
    database: 'app_mi_familia',
    port: 3306
});

db.connect(err => {
    if (err) return console.error('Error de conexión: ', err);
    console.log('Conectado a MySQL');
});

// === Login ===
app.post('/login', (req, res) => {
    const { user, pass } = req.body;

    const query = 'SELECT * FROM usuario WHERE nombre = ? AND contrasena = ?';
    db.query(query, [user, pass], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error en la base de datos');
        }

        if (results.length > 0) {
            return res.status(200).json({ mensaje: 'Login exitoso', user: results[0] });
        } else {
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }
    });
});

// === Crear un nuevo usuario ===
app.post('/usuarios', (req, res) => {
    const { nombre, apellido, num_documento, telefono, email, direccion, rol, contrasena } = req.body;
    const query = 'INSERT INTO usuario (nombre, apellido, num_documento, telefono, email, direccion, rol, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nombre, apellido, num_documento, telefono, email, direccion, rol, contrasena], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al registrar el usuario');
        }
        res.status(201).json({ mensaje: 'Usuario registrado exitosamente', id: result.insertId });
    });
});
// === Obtener todos los usuarios ===
app.get('/usuarios', (req, res) => {
    const query = 'SELECT * FROM usuario';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send('Error al obtener los usuarios');
        res.json(results);
    });
});
// === Eliminar un usuario ===
app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM usuario WHERE id_usuario = ?'; 

    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error en DELETE /usuarios/:id:', err); 
            return res.status(500).send('Error al eliminar el usuario');
        }
        res.json({ mensaje: 'Usuario eliminado' });
    });
});

// === Actualizar un usuario (incluyendo contraseña) ===
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, num_documento, telefono, email, direccion, rol, contrasena } = req.body;

    const query = 'UPDATE usuario SET nombre = ?, apellido = ?, num_documento = ?, telefono = ?, email = ?, direccion = ?, rol = ?, contrasena = ? WHERE id_usuario = ?'; // CAMBIO AQUÍ
    const values = [nombre, apellido, num_documento, telefono, email, direccion, rol, contrasena, id];

    db.query(query, values, (err) => {
        if (err) return res.status(500).send('Error al actualizar el usuario');
        res.json({ mensaje: 'Usuario actualizado' });
    });
});
// === Iniciar el servidor ===
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
