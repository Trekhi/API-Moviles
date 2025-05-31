const Ciudad = require('../models/ciudad');

exports.crearCiudad = async (req, res) => {
  try {
    const ciudad = new Ciudad(req.body);
    await ciudad.save();
    res.status(201).json(ciudad);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.obtenerCiudades = async (req, res) => {
  const ciudades = await Ciudad.find().populate('pais');
  res.json(ciudades);
};
