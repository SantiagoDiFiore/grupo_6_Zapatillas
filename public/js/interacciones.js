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
    menuOpen.style.display="block"
});
menuClose.addEventListener("click",function(){
    menuOpen.style.display="none"
})
linkDesplegable.addEventListener("click",function(){
    menuOpen.style.display="none"
})









}