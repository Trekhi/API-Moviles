
const mongoose = require('mongoose'); 

const PersonajeSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ciudad_nacimiento: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad' },
  famoso: { type: mongoose.Schema.Types.ObjectId, ref: 'Famoso' },
  motivo_fama: { type: String, enum: ['Deportista', 'Actor', 'Político', 'Artista', 'Otro'] }
});

module.exports = mongoose.model('Personaje', PersonajeSchema);
//BIEN