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

/* JS Carrusel*/

function App() {}
   
    window.onload = function(event) {
        var app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event) {
        const btn = event.currentTarget;
        const carruselList = event.cyrrentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector("#track");
        const carrusel = track.querySelectorAll(".carrusel");
        
        const carruselWidth = carrusel[0].offsetWidth;
        const  trackWidth = track.offsetWidth;
        const listWidth = carruselList.offsetWidth;

        track.style.left == "" ? leftposition = track.style.left = 0 :leftposition = parseFloat(track.style.left.slice(0,2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftposition, carruselWidth, track) : nextAction(leftposition, trackWidth, listWidth, carruselWidth, track) 

    }

    let prevAction = (leftposition, carruselWidth, track) => {
        if (leftposition > 0) {
            track.style.left = `${-1 * (leftposition - carruselWidth)}px`; 
        }
    } 

    let nextAction = (leftposition, trackWidth, listWidth, carruselWidth, track) => {
        if (leftposition < (trackWidth - listWidth)) {
            track.style.left = `${-1 * (leftposition + carruselWidth)}px`; 
        }
    }



