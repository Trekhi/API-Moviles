const Plato = require('../models/plato');

exports.crearPlato = async (req, res) => {
  const plato = new Plato(req.body);
  await plato.save();
  res.status(201).json(plato);
};

exports.obtenerPlatos = async (req, res) => {
  const platos = await Plato.find();
  res.json(platos);
};
