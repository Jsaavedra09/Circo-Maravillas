/* JS Menu Hamburguesa*/

const sidebar = document.querySelector(".sidebar");

    function showSidebar(){
        sidebar.style.display = "flex"
     }
     function hideSidebar(){
        sidebar.style.display = "none"
    }

/* JS Entradas*/

const asientos = document.querySelectorAll('.asiento');

asientos.forEach(asiento => {
    asiento.addEventListener('click', () => {
        asiento.classList.toggle('asiento-seleccionado');
    });
});

/* Registro de Asientos */

document.addEventListener("DOMContentLoaded", () => {
    const asientos = document.querySelectorAll(".asiento");
    const reservas = []; // Lista de reservas
    const precioNiños = 20000;
    const precioAdultos = 25000;
    const precioInclusivo = 20000;

    // Función para actualizar el resumen de reservas
    const actualizarResumen = () => {
        const resumen = document.querySelector("#resumen");
        const totalReservas = reservas.length;
        const totalDinero = reservas.reduce((total, reserva) => total + reserva.precio, 0);

        resumen.innerHTML = `
            <p>Total Asientos Reservados: ${totalReservas}</p>
            <p>Total Recaudado: $${totalDinero.toLocaleString()}</p>
        `;
    };

    // Agregar evento a cada asiento
    asientos.forEach(asiento => {
        asiento.addEventListener("click", () => {
            if (asiento.classList.contains("reservado")) {
                alert("Este asiento ya está reservado.");
                return;
            }

            const tipo = prompt("Ingrese el tipo de entrada (niño, adulto, inclusivo):").toLowerCase();
            let precio;

            if (tipo === "niño") {
                precio = precioNiños;
            } else if (tipo === "adulto") {
                precio = precioAdultos;
            } else if (tipo === "inclusivo") {
                precio = precioInclusivo;
            } else {
                alert("Tipo de entrada no válido. Intente de nuevo.");
                return;
            }

            asiento.classList.add("reservado"); // Marcar el asiento como reservado
            reservas.push({ asiento: asiento.textContent, tipo, precio });
            actualizarResumen();
        });
    });

    // Crear un contenedor para el resumen y el botón
    const contenedorAsientos = document.querySelector(".asientos");
    const resumenDiv = document.createElement("div");
    resumenDiv.id = "resumen";
    resumenDiv.style.marginTop = "20px";
    resumenDiv.style.padding = "10px";
    resumenDiv.style.border = "1px solid #000";

    const botonContinuar = document.createElement("button");
    botonContinuar.textContent = "Continuar";
    botonContinuar.style.marginTop = "10px";
    botonContinuar.style.padding = "10px 20px";
    botonContinuar.style.cursor = "pointer";

    // Evento para recargar la página
    botonContinuar.addEventListener("click", () => {
        if (confirm("¿Está seguro de que desea continuar? Esto reiniciará las reservas.")) {
            location.reload(); // Recarga la página
        }
    });

    resumenDiv.appendChild(botonContinuar);
    contenedorAsientos.appendChild(resumenDiv);

    // Inicializar resumen
    actualizarResumen();
});


