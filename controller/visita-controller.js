const Visita = require('../models/Visita');

exports.registrarVisita = async (req, res) => {
  const visita = new Visita(req.body);
  await visita.save();
  res.status(201).json(visita);
};

exports.obtenerVisitas = async (req, res) => {
  const visitas = await Visita.find()
    .populate('usuario')
    .populate('sitio');
  res.json(visitas);
};
