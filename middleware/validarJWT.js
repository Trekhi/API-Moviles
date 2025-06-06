const jwt = require("jsonwebtoken");

const validarJWT = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({ Ok: false, msg: "No hay token en la petición" });
  }

  try {
    const { uid, nombre } = jwt.verify(token, process.env.JWT_SECRET || "mi_clave_secreta");
    req.uid = uid;
    req.nombre = nombre;
    next();
  } catch (error) {
    return res.status(401).json({ Ok: false, msg: "Token no válido" });
  }
};

module.exports = validarJWT;
