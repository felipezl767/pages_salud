document.addEventListener("DOMContentLoaded", () => {
    let enlaces = document.querySelectorAll("nav ul li a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(event) {
            event.preventDefault();
            let seccionID = this.getAttribute("data-section");
            mostrarSeccion(seccionID);
        });
    });

    function mostrarSeccion(id) {
        let secciones = document.querySelectorAll(".contenido");

        secciones.forEach(seccion => {
            seccion.classList.remove("activo");
        });

        let seccionActiva = document.getElementById(id);
        if (seccionActiva) {
            seccionActiva.classList.add("activo");
            seccionActiva.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    mostrarSeccion("definicion");

    window.addEventListener("resize", ajustarMenu);

    function ajustarMenu() {
        let nav = document.querySelector("nav ul");
        if (window.innerWidth <= 768) {
            nav.style.flexDirection = "column";
            nav.style.alignItems = "center";
        } else {
            nav.style.flexDirection = "row";
            nav.style.alignItems = "center";
        }
    }

    ajustarMenu();
});
