document.addEventListener("DOMContentLoaded", () => {
    // Manejo de la navegación entre secciones
    let enlaces = document.querySelectorAll("nav ul li a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que la página recargue

            let seccionID = this.getAttribute("data-section");
            mostrarSeccion(seccionID);
        });
    });

    function mostrarSeccion(id) {
        let secciones = document.querySelectorAll(".contenido");

        secciones.forEach(seccion => {
            seccion.classList.remove("activo"); // Oculta todas las secciones
        });

        let seccionActiva = document.getElementById(id);
        if (seccionActiva) {
            seccionActiva.classList.add("activo"); // Muestra la sección seleccionada

            // Desplazamiento suave hacia la nueva sección
            seccionActiva.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    // Muestra solo la primera sección al cargar la página
    mostrarSeccion("definicion");
});
