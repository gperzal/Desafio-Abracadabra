
class Usuario {
    constructor() {
        this.usuarios = ['Juan', 'Jocelyn', 'Astrid', 'Maria', 'Ignacia', 'Javier', 'Brian'];
    }

    agregarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    obtenerUsuarios() {
        return this.usuarios;
    }

    existeUsuario(usuario) {
        return this.usuarios.includes(usuario);
    }
}

// Exporta el modelo
module.exports = new Usuario();





