window.onload=function(){

//modal de suscripcion
let botonSuscribe=document.querySelector("#botonSuscribe");
let botonCerrarSuscripcion=document.querySelector("#cerrarSuscripcion");
let modalSuscripcion=document.querySelector("#suscripcion");
let inputSuscripcion=document.querySelector("#emailSuscripcion");
let suscriptor=document.querySelector("#suscriptor");

if(botonSuscribe){//si existe el boton de suscripcion...
    botonSuscribe.addEventListener("click",function(){
        modalSuscripcion.style.display="block"
        let email=inputSuscripcion.value
        suscriptor.innerText=email
        inputSuscripcion.value=""
    });
    botonCerrarSuscripcion.addEventListener("click",function(){
        modalSuscripcion.style.display="none"
    });
}


//menu desplegable mobile
let burguerMenu=document.querySelector("#contenedor-menu");
let menuOpen=document.querySelector("#menu-open");
let linkDesplegable=document.querySelector("#link-desplegable");
let menuClose=document.querySelector("#menu-close");

burguerMenu.addEventListener("click",function(){
    menuOpen.style.display="block";
    menuOpen.style.animation="aperturaMenu 1s 1"//agregamos la animacion de css que despliega el menú
    
});
menuClose.addEventListener("click",function(){
    menuOpen.style.animation="cierreMenu 1s 1"//agregamos la animacio de css que cierra el menu
    function cierre(){
        return menuOpen.style.display="none"
    }
    setTimeout(cierre,1000)//con set timeout retrasamos el diplay none, ejecuta la funcion luego del tiempo establecido
    
})
linkDesplegable.addEventListener("click",function(){
    menuOpen.style.display="none"
})









}