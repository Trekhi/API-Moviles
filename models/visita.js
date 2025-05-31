const mongoose = require('mongoose'); 

const VisitaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  sitio: { type: mongoose.Schema.Types.ObjectId, ref: 'Sitio', required: true },
  fecha_visita: { type: Date, default: Date.now },
  metodo: { type: String, enum: ['QR', 'Foto'], required: true },
  geolocalizacion: {
    lat: Number,
    lng: Number
  },
  foto_url: String
});


module.exports = mongoose.model('Visita', VisitaSchema);
