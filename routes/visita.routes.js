const express = require('express');
const router = express.Router();
const visitaController = require('../controller/visita-controller');


router.get('/', visitaController.obtenerVisitas);
router.get('/usuario/:id', visitaController.obtenerVisitasPorUsuario);
router.post('/', visitaController.registrarVisita);
router.delete('/:id', visitaController.eliminarVisita);

module.exports = router;
