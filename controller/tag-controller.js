const Tag = require('../models/tag');

exports.crearTag = async (req, res) => {
  const tag = new Tag(req.body);
  await tag.save();
  res.status(201).json(tag);
};

exports.obtenerTags = async (req, res) => {
  const tags = await Tag.find()
    .populate('usuario')
    .populate('famoso');
  res.json(tags);
};
