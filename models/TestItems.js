const { Schema, model } = require('mongoose');

const testItemsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const TestItem = model('TestItem', testItemsSchema);

module.exports = TestItem;

