const express = require('express');
const router = express.Router();
const visitaController = require('../controller/visita-controller');

router.post('/', visitaController.registrarVisita);
router.get('/', visitaController.obtenerVisitas);

module.exports = router;
