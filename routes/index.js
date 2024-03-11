const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const path = require('path');

// Ruta para listar todos los usuarios
router.get('/abracadabra/usuarios', usuarioController.listarUsuarios);

// Ruta para validar el usuario. Utiliza el middleware validarUsuario
router.get('/abracadabra/juego/:usuario', usuarioController.validarUsuario, (req, res) => {
    // Si el middleware no redirige, este manejador enviará una respuesta afirmativa
    res.send("Usuario validado exitosamente.");
});

// Ruta para el juego del conejo
router.get('/abracadabra/conejo/:n', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 4) + 1; // Número del 1 al 4
    const numeroUsuario = parseInt(req.params.n, 10);

    if (numeroUsuario === numeroAleatorio) {
        res.redirect('/assets/img/conejito.jpg'); // Redirige a la imagen del conejo
    } else {
        res.redirect('/assets/img/voldemort.jpg'); // Redirige a la imagen de Voldemort
    }
});


// Ruta para la página 404
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/404.html')); // Ajusta la ruta según sea necesario
});

module.exports = router;
