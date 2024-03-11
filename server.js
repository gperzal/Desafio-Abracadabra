const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index');

app.use(express.static('public'));

// Ruta para servir index.html en la ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Usa las rutas definidas en routes/index.js
app.use('/', routes);

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
