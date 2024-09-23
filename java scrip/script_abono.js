// Esperar a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Asignar el evento a los botones con la clase 'view-details-btn'
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    viewDetailsButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Obtener los atributos data-* del botón presionado
            const id = this.getAttribute('data-id');
            const reserva = this.getAttribute('data-reserva');
            const cliente = this.getAttribute('data-cliente');
            const fecha = this.getAttribute('data-fecha');
            const total = this.getAttribute('data-total');
            const abono = this.getAttribute('data-abono');
            const restante = this.getAttribute('data-restante');
            const comprobante = this.getAttribute('data-comprobante');
            const estado = this.getAttribute('data-estado');

            // Llamar a la función para mostrar el modal con los detalles
            viewAbonoDetails(id, reserva, cliente, fecha, total, abono, restante, comprobante, estado);
        });
    });
});

function viewAbonoDetails(id, reserva, cliente, fecha, total, abono, restante, comprobante, estado) {
    // Llenar los detalles del abono en el modal
    document.getElementById('viewAbonoId').innerText = id;
    document.getElementById('viewAbonoReserva').innerText = reserva;
    document.getElementById('viewAbonoCliente').innerText = cliente;
    document.getElementById('viewAbonoFecha').innerText = fecha;
    document.getElementById('viewAbonoTotal').innerText = total;
    document.getElementById('viewAbonoMonto').innerText = abono;
    document.getElementById('viewAbonoRestante').innerText = restante;
    document.getElementById('viewAbonoComprobante').innerText = comprobante;
    document.getElementById('viewAbonoEstado').innerText = estado;

    // Mostrar el modal
    const viewModal = new bootstrap.Modal(document.getElementById('viewAbonoModal'));
    viewModal.show();
}

// Función para el checkbook Comprobado/Anulado
function toggleEstado(id) {
    const checkbox = document.getElementById(`estado-${id}`);
    const statusText = document.getElementById(`estado-text-${id}`);
    if (checkbox.checked) {
        statusText.textContent = 'Comprobado';
        statusText.className = 'text-success';
    } else {
        statusText.textContent = 'Anulado';
        statusText.className = 'text-danger';
    }
}
