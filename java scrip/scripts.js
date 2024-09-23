 // Funciones globales para el toggle de menú y perfil
$(document).ready(function () {

    // Toggle Sidebar
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // Funcionalidad del perfil desplegable
    document.querySelector('.profile-toggle').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        const menu = document.getElementById('profileMenu');
        // Cambia el estilo entre mostrar y ocultar
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('profileMenu');
        const isClickInside = document.querySelector('.dropdown').contains(event.target);

        if (!isClickInside) {
            menu.style.display = 'none';  // Cierra el menú si se hace clic fuera del dropdown
        }
    });
}); 

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