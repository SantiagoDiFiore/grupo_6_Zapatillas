window.addEventListener("load",function(){
    //modal de suscripcion
    let botonSuscribe = document.querySelector("#botonSuscribe");
    let botonCerrarSuscripcion = document.querySelector("#cerrarSuscripcion");
    let botonCerrarEmail = document.querySelector("#cerrarEmail");
    let modalSuscripcion = document.querySelector("#suscripcion");
    let ingresaEmail=document.querySelector("#ingresaEmail")
    let inputSuscripcion = document.querySelector("#emailSuscripcion");
    let suscriptor = document.querySelector("#suscriptor");
    
    
    if(botonSuscribe){//si existe el boton de suscripcion...
        botonSuscribe.addEventListener("click",function(){
            //si no ingresó nada en el campo email muestra alerta
            if(inputSuscripcion.value==""){
                ingresaEmail.style.display="block"
    
            }else{//muestra ventana de suscripcion y resetea el input
                modalSuscripcion.style.display = "block"
                let email = inputSuscripcion.value
                suscriptor.innerText = email
                inputSuscripcion.value = ""
            }   
        });
        botonCerrarSuscripcion.addEventListener("click",function(){
            modalSuscripcion.style.display = "none"
        });
        botonCerrarEmail.addEventListener("click",function(){
            ingresaEmail.style.display = "none"
        });
    }
    
    
    //menu desplegable mobile
    let burguerMenu = document.querySelector("#contenedor-menu");
    let menuOpen = document.querySelector("#menu-open");
    let linkDesplegable = document.querySelector("#link-desplegable");
    let menuClose = document.querySelector("#menu-close");
    
    burguerMenu.addEventListener("click",function(){
        menuOpen.style.display = "block";
        menuOpen.style.animation = "aperturaMenu 1s 1"//agregamos la animacion de css que despliega el menú
        
    });
    menuClose.addEventListener("click",function(){
        menuOpen.style.animation = "cierreMenu 1s 1"//agregamos la animacio de css que cierra el menu
        function cierre(){
            return menuOpen.style.display="none"
        }
        setTimeout(cierre,1000)//con set timeout retrasamos el diplay none, ejecuta la funcion luego del tiempo establecido
        
    })
    linkDesplegable.addEventListener("click",function(){
        menuOpen.style.display = "none"
    })
    
    //logo 
    let logo=document.querySelector("#mainLogo")
    
    logo.addEventListener("click",function(){
        logo.style.animation = "jump 0.5s 1"
    })
    
    
    //modal Eliminar Producto
    let formEliminarProducto=document.querySelector("#eliminarProducto");
    let modalEliminar=document.querySelector("#modalEliminar")
    let confirmar=document.querySelector(".botonEliminarProducto");
    let denegar=document.querySelector(".botonDenegar");
    
    if(formEliminarProducto){
        formEliminarProducto.addEventListener("submit",function(e){
            e.preventDefault()
            modalEliminar.style.display="block"
            confirmar.addEventListener("click",function(){
                formEliminarProducto.submit()
            })
            denegar.addEventListener("click",function(){
                modalEliminar.style.display="none"
            })
            
        })
        }

    //modal Eliminar Usuario
    let formEliminarUsuario=document.querySelector("#eliminarUsuario");
    let modalEliminarUsuario=document.querySelector("#modalEliminarUsuario")
    let confirmacion=document.querySelector(".botonEliminarUsuario");
    let cancelacion=document.querySelector(".botonDenegarUsuario");
    
    if(formEliminarUsuario){
        formEliminarUsuario.addEventListener("submit",function(e){
            e.preventDefault()
            modalEliminarUsuario.style.display="block"
            confirmacion.addEventListener("click",function(){
                formEliminarUsuario.submit()
            })
            cancelacion.addEventListener("click",function(){
                modalEliminarUsuario.style.display="none"
            })
            
        })
        }

})


























