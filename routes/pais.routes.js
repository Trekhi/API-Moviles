const express = require('express');
const router = express.Router();
const paisController = require('../controller/pais-controller');

router.post('/', paisController.crearPais);
router.get('/', paisController.obtenerPaises);

module.exports = router;
