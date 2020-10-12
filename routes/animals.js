const { Router } = require('express');
const Animal = require('../models/Animal');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();

    res.status(200).json(animals);
  }
  catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const animal = await Animal.findById(id);

    if (!animal) {
      res.status(400).json({ message: `No Animal with the ID: ${id}` });
      return;
    }

    res.status(200).json(animals);
  }
  catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, description, species, breed } = req.body;

    if (!name || !description || !species) {
      res.status(400).json({ message: 'Must provide name, description, and species' });
      return;
    }

    const newAnimal = new Animal({ name, description, species, breed });
    await newAnimal.save();

    res.status(200).json(newAnimal);
  }
  catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const animal = await Animal.findById(id);

    if (!animal) {
      res.status(400).json({ message: `No Animal with the ID: ${id}` });
      return;
    }

    await animal.remove();

    res.status(200).json(animal);
  }
  catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;