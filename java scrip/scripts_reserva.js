function viewUserDetails(id, nombre, correo, telefono, documento, estado, imagePath, fechaCreacion, fechaEntrada, fechaSalida, nombrePaquete) {
    // Asigna los valores a los elementos del modal
    document.getElementById('viewUserId').innerText = id;
    document.getElementById('viewUserName').innerText = nombre;
    document.getElementById('viewUserEmail').innerText = correo;
    document.getElementById('viewUserPhone').innerText = telefono;
    document.getElementById('viewUserStatus').innerText = estado;

    // Si tienes un campo para el documento
    let documentElement = document.getElementById('viewUserDocument');
    if (documentElement) {
        documentElement.innerText = documento;
    }

    // Asigna las fechas
    document.getElementById('viewFechaCreacion').innerText = fechaCreacion;
    document.getElementById('viewFechaEntrada').innerText = fechaEntrada;
    document.getElementById('viewFechaSalida').innerText = fechaSalida;

    // Asigna el nombre del paquete
    document.getElementById('viewNombrePaquete').innerText = nombrePaquete;

    // Asignar la imagen del usuario si está disponible
    let imageElement = document.getElementById('viewUserImage');
    if (imagePath) {
        imageElement.src = imagePath; // Ruta de la imagen
        imageElement.alt = nombre; // Texto alternativo para la imagen
    } else {
        imageElement.src = 'imagen/default.png'; // Imagen por defecto si no hay imagen
        imageElement.alt = 'Sin imagen disponible';
    }

    // Mostrar el modal
    const viewModal = new bootstrap.Modal(document.getElementById('viewUserModal'));
    viewModal.show();
}


// Función para el checkbook activo/inactivo
function toggleEstado(id) {
    const checkbox = document.getElementById(`estado-${id}`);
    const statusText = document.getElementById(`estado-text-${id}`);
    if (checkbox.checked) {
        statusText.textContent = 'Habilitado';
        statusText.className = 'text-success';
    } else {
        statusText.textContent = 'Inhabilitado';
        statusText.className = 'text-danger';
    }
}




