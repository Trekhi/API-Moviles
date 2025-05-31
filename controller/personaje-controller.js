const Personaje = require('../models/Personaje');

exports.crearPersonaje = async (req, res) => {
  const personaje = new Personaje(req.body);
  await personaje.save();
  res.status(201).json(personaje);
};

exports.obtenerPersonajes = async (req, res) => {
  const personajes = await Personaje.find()
    .populate('ciudad_nacimiento')
    .populate('famoso');
  res.json(personajes);
};
