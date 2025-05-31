const Famoso = require('../models/famoso');

exports.crearFamoso = async (req, res) => {
  const famoso = new Famoso(req.body);
  await famoso.save();
  res.status(201).json(famoso);
};

exports.obtenerFamosos = async (req, res) => {
  const famosos = await Famoso.find().populate('ciudad_nacimiento');
  res.json(famosos);
};
