const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Probar que funciona...
app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

module.exports = { PORT, app }
