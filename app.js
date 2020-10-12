const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MONGO_URI, MONGO_DB_NAME } = require('./config');

const app = express();

// Middleware
app.use(bodyParser.json());

// Database
const uri = `${MONGO_URI}${MONGO_DB_NAME}`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const animalRoutes = require('./routes/animals');

app.use('/api/animals', animalRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;