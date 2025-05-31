const express = require('express');
const Usuario = require('../models/usuario');
const router = express.Router();
const { loginUsuario, crearUsuario } = require('../controller/usuario-controller');
const validarJWT = require('../middleware/validarJWT');

// Registro y login públicos
router.post("/register", crearUsuario);
router.post("/login", loginUsuario);

// Ruta protegida (requiere token válido)
router.get("/perfil", validarJWT, async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.uid).select('nombre email avatarUrl');

    if (!usuario) {
      return res.status(404).json({ Ok: false, msg: 'Usuario no encontrado' });
    }

    res.json({
      Ok: true,
      msg: "Acceso autorizado",
      uid: req.uid,
      nombre: usuario.nombre,
      email: usuario.email,
      
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Ok: false, msg: 'Error en el servidor' });
  }
});
module.exports = router;
