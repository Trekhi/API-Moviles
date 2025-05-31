const express = require('express');
const router = express.Router();
const platoController = require('../controller/plato-controller');

router.post('/', platoController.crearPlato);
router.get('/', platoController.obtenerPlatos);

module.exports = router;
