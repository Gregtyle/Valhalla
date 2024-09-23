// Función para el checkbox activo/inactivo en cualquier vista (Usuarios/Roles) 
function toggleEstado(id) {
    const checkbox = document.getElementById(`estado-${id}`);
    const statusText = document.getElementById(`estado-text-${id}`);
    if (checkbox && statusText) {
        statusText.textContent = checkbox.checked ? 'Habilitado' : 'Inhabilitado';
        statusText.className = checkbox.checked ? 'text-success' : 'text-danger';
    }
}

// Funcionalidad del perfil desplegable y menú lateral
$(document).ready(function () {
    const profileToggle = $('.profile-toggle');
    const profileMenu = $('#profileMenu');
    const menuToggle = $('#menu-toggle');
    const sidebar = $('#sidebar-wrapper');

    profileToggle.on('click', function(event) {
        event.preventDefault();
        profileMenu.toggle();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            profileMenu.hide();
        }
    });

    menuToggle.on('click', function() {
        sidebar.toggleClass('toggled');
    });
});

// Función para ver los detalles del usuario
function viewUserDetails(id, name, email, phone, status, imageUrl) {
    $('#viewUserId').text(id);
    $('#viewUserName').text(name);
    $('#viewUserEmail').text(email);
    $('#viewUserPhone').text(phone);
    $('#viewUserStatus').text(status);
    $('#viewUserImage').attr('src', imageUrl);

    $('#viewUserModal').modal('show');
}

// Funcionalidad para editar y eliminar roles
function editRole(id) {
    // Aquí puedes obtener los datos del rol y llenarlos en el modal de edición
    const row = $(`#role-${id}`);
    const name = row.find('.role-name').text();
    const description = row.find('.role-description').text();
    const status = row.find('.role-status').text();

    // Prellena el modal con los datos del rol
    $('#editRoleName').val(name);
    $('#editRoleDescription').val(description);
    $('#editRoleStatus').prop('checked', status === 'Activo');

    // Almacena el ID en un campo oculto para usarlo al guardar cambios
    $('#editRoleId').val(id);

    // Muestra el modal
    $('#editRoleModal').modal('show');
}

function saveRoleChanges() {
    const id = $('#editRoleId').val();
    const name = $('#editRoleName').val();
    const description = $('#editRoleDescription').val();
    const status = $('#editRoleStatus').is(':checked') ? 'Activo' : 'Inactivo';

    // Actualiza la fila correspondiente en la tabla
    const row = $(`#role-${id}`);
    row.find('.role-name').text(name);
    row.find('.role-description').text(description);
    row.find('.role-status').text(status);

    $('#editRoleModal').modal('hide'); // Cierra el modal después de guardar
}

function deleteRole(id) {
    // Lógica para eliminar el rol
    if (confirm('¿Estás seguro de que deseas eliminar este rol?')) {
        $(`#role-${id}`).remove(); // Elimina la fila de la tabla
        console.log(`Rol con ID: ${id} eliminado`);
    }
}

// Lógica para gestionar la tabla y acciones en la vista de Roles
function initRoles() {
    $('#saveRole').on('click', function() {
        const roleData = {
            name: $('#roleName').val(),
            description: $('#roleDescription').val(),
            status: $('#roleStatus').is(':checked') ? 'Activo' : 'Inactivo'
        };

        // Validación básica
        if (!roleData.name) {
            alert('Por favor, ingrese un nombre para el rol.');
            return;
        }

        const roleId = Math.floor(Math.random() * 1000); // Genera un ID único
        const newRow = `
            <tr id="role-${roleId}">
                <td>${roleId}</td>
                <td class="role-name">${roleData.name}</td>
                <td class="role-description">${roleData.description}</td>
                <td class="role-status">${roleData.status}</td>
                <td>
                    <button class="btn btn-info" onclick="editRole(${roleId})">Editar</button>
                    <button class="btn btn-danger" onclick="deleteRole(${roleId})">Eliminar</button>
                </td>
            </tr>`;
        $('#roleTable').append(newRow);
        $('#roleModal').modal('hide');
    });

    $('#saveEditRole').on('click', saveRoleChanges); // Asocia el botón de guardar cambios
}

// Inicialización de Vistas
$(document).ready(function() {
    const path = window.location.pathname;

    if (path.includes('roles')) {
        initRoles();
    }
});

// Crear usuarios
$(document).ready(function () {
    // Maneja el evento de envío del formulario
    $('#userForm').on('submit', function (event) {
        event.preventDefault(); // Previene el envío predeterminado del formulario

        $('#successModal').modal('show'); // Muestra el modal de éxito

        // Redirigir después de 3 segundos
        setTimeout(() => {
            window.location.href = 'usuarios.html'; // Redirige a la vista de usuarios
        }, 3000); // Espera 3000 milisegundos (3 segundos)
    });
});
