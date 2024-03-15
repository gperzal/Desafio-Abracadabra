document.querySelectorAll('.sombrero-link').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const numero = this.getAttribute('data-numero');

        fetch(`/abracadabra/conejo/${numero}`)
            .then(response => {
                if (response.redirected) {
                    const imageUrl = response.url;
                    document.getElementById('modalImagen').src = imageUrl;
                    const mensaje = imageUrl.includes('conejito') ? '¡Felicidades, encontraste el conejo!' : 'Oh no, ¡El que no debe ser nombrado! Inténtalo nuevamente';
                    document.getElementById('modalMensaje').textContent = mensaje;
                    document.getElementById('modals').style.display = 'block';
                }
            });
    });
});

// Cierra el modal cuando el usuario hace clic en (x)
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('modals').style.display = 'none';
});

// Cierra el modal cuando el usuario hace clic fuera de él
window.onclick = function (event) {
    if (event.target == document.getElementById('modals')) {
        document.getElementById('modals').style.display = 'none';
    }
}

