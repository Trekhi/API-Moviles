const mongoose = require('mongoose'); 

const MenuSitioSchema = new mongoose.Schema({
  sitio: { type: mongoose.Schema.Types.ObjectId, ref: 'Sitio', required: true },
  plato: { type: mongoose.Schema.Types.ObjectId, ref: 'Plato', required: true },
  valor_plato: { type: Number, required: true }
});

module.exports = mongoose.model('MenuSitio', MenuSitioSchema);
