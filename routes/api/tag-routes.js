const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get all tags with associated Product data
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Get a single tag by ID with associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create({ tag_name: req.body.tag_name });
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// Update a tag by ID
router.put('/:id', async (req, res) => {
  try {
    await Tag.update({ tag_name: req.body.tag_name }, { where: { id: req.params.id } });
    const updatedTag = await Tag.findByPk(req.params.id);
    res.json(updatedTag);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// Delete a tag by ID
router.delete('/:id', async (req, res) => {
  try {
    const qtyRemoved = await Tag.destroy({ where: { id: req.params.id } });
    res.json(`${qtyRemoved} tag were removed from the database`);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;