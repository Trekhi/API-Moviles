const Pais = require('../models/Pais');

exports.crearPais = async (req, res) => {
  try {
    const pais = new Pais(req.body);
    await pais.save();
    res.status(201).json(pais);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.obtenerPaises = async (req, res) => {
  const paises = await Pais.find();
  res.json(paises);
};
