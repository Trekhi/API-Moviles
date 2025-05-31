const Usuario = require('../models/usuario');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const crearUsuario = async (req, res) => {
  try {
    // Change 'correo' to 'email' to match your schema
    const { nombre, email, password, rol } = req.body;

    // Verificar si el email ya existe
    const existeEmail = await Usuario.findOne({ email }); // Change 'correo' to 'email'
    if (existeEmail) {
      return res.status(400).json({ Ok: false, msg: "El email ya está registrado" }); // Change 'correo' to 'email'
    }

    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Crear usuario
    const nuevoUsuario = new Usuario({
      nombre,
      email, // Change 'correo' to 'email'
      password: hashedPassword,
      rol,
    });

    await nuevoUsuario.save();

    // Generar token JWT
    const token = jwt.sign(
      { uid: nuevoUsuario._id },
      process.env.JWT_SECRET || "mi_clave_secreta",
      { expiresIn: "4h" }
    );

    res.json({ Ok: true, usuario: nuevoUsuario, token });
  } catch (error) {
    console.error("Error en crearUsuario:", error);
    res.status(500).json({ Ok: false, msg: error.message });
  }
};

const loginUsuario = async (req, res) => {
  try {
    // Change 'correo' to 'email'
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email }); // Change 'correo' to 'email'

    // Removed the 'usuario.estado' check as it's not in your schema
    if (!usuario) {
      return res.status(400).json({ Ok: false, msg: "Usuario no encontrado" });
    }

    // Verificar contraseña
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({ Ok: false, msg: "Contraseña incorrecta" });
    }

    // Generar token JWT
    const token = jwt.sign(
      { uid: usuario._id },
      process.env.JWT_SECRET || "mi_clave_secreta",
      { expiresIn: "4h" }
    );

    res.json({ Ok: true, usuario, token });
  } catch (error) {
    console.error("Error en loginUsuario:", error);
    res.status(500).json({ Ok: false, msg: error.message });
  }
};

module.exports = {
  crearUsuario,
  loginUsuario,
  // otras funciones si las tienes
};
