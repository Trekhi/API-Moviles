const express = require('express');
const router = express.Router();
const famosoController = require('../controller/famoso-controller');

router.post('/', famosoController.crearFamoso);
router.get('/', famosoController.obtenerFamosos);

module.exports = router;
