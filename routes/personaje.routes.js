const express = require('express');
const router = express.Router();
const personajeController = require('../controller/personaje-controller');

router.post('/', personajeController.crearPersonaje);
router.get('/', personajeController.obtenerPersonajes);

module.exports = router;
