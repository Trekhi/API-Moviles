const express = require('express');
const router = express.Router();
const tagController = require('../controller/tag-controller');

router.post('/', tagController.crearTag);
router.get('/', tagController.obtenerTags);

module.exports = router;
