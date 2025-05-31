const express = require('express');
const router = express.Router();
const menuController = require('../controller/menuSitio-controller');

router.post('/', menuController.crearMenu);
router.get('/', menuController.obtenerMenus);

module.exports = router;
