const express = require('express');
const TestItem = require('../models/Testitems');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const testItems = await TestItem.find();
    res.status(200).json(testItems);
  }
  catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

router.post('/', async (req, res) => {
  const newTestItem = new TestItem({
    name: req.body.name
  });

  try {
    const testItem = await newTestItem.save();
    res.status(200).json(testItem);
  }
  catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

module.exports = router;