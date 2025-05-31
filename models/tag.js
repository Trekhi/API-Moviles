const mongoose = require('mongoose'); 

const TagSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  personaje: { type: mongoose.Schema.Types.ObjectId, ref: 'Personaje', required: true },
  comentario: String,
  fecha: { type: Date, default: Date.now },
  metodo: { type: String, enum: ['QR', 'Foto'] },
  geolocalizacion: {
    lat: Number,
    lng: Number
  },
  foto_url: String
});


module.exports = mongoose.model('Tag', TagSchema);

//BIEN