const Tag = require('../models/Tag');

exports.crearTag = async (req, res) => {
  const tag = new Tag(req.body);
  await tag.save();
  res.status(201).json(tag);
};

exports.obtenerTags = async (req, res) => {
  const tags = await Tag.find()
    .populate('usuario')
    .populate('personaje');
  res.json(tags);
};
