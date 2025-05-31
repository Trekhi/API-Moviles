const mongoose = require('mongoose'); 

const FamosoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ciudad_nacimiento: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: true },
  motivoFama: { type: String, enum: ["Deportista", "Actor", "Político", "Cantante", "Escritor", "Militar", "Pintor","Compositor"], required: true } 
});

module.exports = mongoose.model('Famoso', FamosoSchema);
//BIEN