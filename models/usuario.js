const mongoose = require('mongoose'); 

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ['Administrador', 'Usuario'], required: true },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

//BIEN