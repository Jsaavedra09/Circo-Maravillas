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