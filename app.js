// Importar el módulo de Express
const express = require('express');

// Crear una instancia de una aplicación Express
const app = express();

// Definir una ruta para el home (ruta raíz)
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo!');
});

// Definir una ruta para /about
app.get('/about', (req, res) => {
  res.send('Página de Acerca de');
});

// Configurar la aplicación para que escuche en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
