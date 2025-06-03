const Visita = require('../models/visita');

exports.obtenerVisitas = async (req, res) => {
  const visitas = await Visita.find()
    .populate('usuario')
    .populate('sitio');
  res.json(visitas);
};

exports.obtenerVisitasPorUsuario = async (req, res) => {
  try {
    const visitas = await Visita.find({ usuario: req.params.id })
      .populate('usuario', 'nombre email')
      .populate('sitio', 'nombre tipo')
      .sort({ fecha_visita: -1 });

    res.json(visitas);
  } catch (err) {
    res.status(500).json({ msg: 'Error al obtener visitas del usuario', error: err.message });
  }
};

exports.registrarVisita = async (req, res) => {
  try {
    const visita = new Visita(req.body);
    await visita.save();
    res.status(201).json(visita);
  } catch (err) {
    res.status(400).json({ msg: 'Error al registrar visita', error: err.message });
  }
};

exports.eliminarVisita = async (req, res) => {
  try {
    await Visita.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Visita eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al eliminar visita', error: err.message });
  }
};