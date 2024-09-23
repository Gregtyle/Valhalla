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

// Función para ver los detalles del usuario
function viewUserDetails(id, name, email, phone, status, imageUrl) {
    // Llenar los datos en el modal
    document.getElementById('viewUserId').textContent = id;
    document.getElementById('viewUserName').textContent = name;
    document.getElementById('viewUserEmail').textContent = email;
    document.getElementById('viewUserPhone').textContent = phone;
    document.getElementById('viewUserStatus').textContent = status;

    // Cargar la imagen del usuario
    document.getElementById('viewUserImage').src = imageUrl;

    // Abrir el modal
    const viewUserModal = new bootstrap.Modal(document.getElementById('viewUserModal'));
    viewUserModal.show();
}








