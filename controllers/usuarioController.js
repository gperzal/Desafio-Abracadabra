const Usuario = require('../models/usuario');

exports.listarUsuarios = (req, res) => {
    res.json(Usuario.obtenerUsuarios());
};

exports.validarUsuario = (req, res, next) => {
    const usuario = req.params.usuario;
    if (Usuario.existeUsuario(usuario)) {
        next();
    } else {
        res.redirect('/assets/img/who.jpeg');
    }
};
