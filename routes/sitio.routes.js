const express = require('express');
const router = express.Router();
const sitioController = require('../controller/sitio-controller');

router.post('/', sitioController.crearSitio);
router.get('/', sitioController.obtenerSitios);

module.exports = router;
