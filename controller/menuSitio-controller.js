const MenuSitio = require('../models/menu');

exports.crearMenu = async (req, res) => {
  const menu = new MenuSitio(req.body);
  await menu.save();
  res.status(201).json(menu);
};

exports.obtenerMenus = async (req, res) => {
  const menus = await MenuSitio.find().populate('plato').populate('sitio');
  res.json(menus);
};
