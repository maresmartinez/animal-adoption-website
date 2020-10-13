const { Schema, model } = require('mongoose');

const Animal = model('Animal', new Schema({
  name: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },

  species: {
    type: String,
    required: true,
  },

  breed: {
    type: String,
  },

  imageURL: {
    type: String
  },

  contactEmail: {
    type: String,
    required: true,
  }
}));

module.exports = Animal;