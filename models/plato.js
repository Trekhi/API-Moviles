const mongoose = require('mongoose'); 

const PlatoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ciudad_origen: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad' }
});

module.exports = mongoose.model('Plato', PlatoSchema);
