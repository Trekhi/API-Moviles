const express = require('express');
const router = express.Router();
const ciudadController = require('../controller/ciudad-controller');

router.post('/', ciudadController.crearCiudad);
router.get('/', ciudadController.obtenerCiudades);

module.exports = router;
