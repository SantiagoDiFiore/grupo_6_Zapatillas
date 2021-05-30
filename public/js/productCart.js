window.onload = function(){
    let buyButton = document.querySelector("#buyButton")
    let tallesDisponibles = document.querySelectorAll(".boton-talle")
    let size = document.getElementsByName('size');
    let modalSuscripcion = document.querySelector("#suscripcion");
    let botonCerrarSuscripcion = document.querySelector("#cerrarSuscripcion");

    buyButton.addEventListener("click",function(event){
        function timeOut(){
         for( let i = 0; i < size.length; i++ ) {
            if (!(size[i].checked)) {
                modalSuscripcion.style.display = "block";
                botonCerrarSuscripcion.addEventListener("click",function(){
                modalSuscripcion.style.display = "none"
            });
        }}}
        setTimeout(timeOut, 100)
    })
}