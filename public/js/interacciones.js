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

    //Desplegables footer
    let footerArticle1=document.querySelector("#footerArticle1")
    let footerArticle2=document.querySelector("#footerArticle2")
    let footerArticle3=document.querySelector("#footerArticle3")
    let upArrow1=document.querySelector(".upArrow1")
    let upArrow2=document.querySelector(".upArrow2")
    let upArrow3=document.querySelector(".upArrow3")
    let downArrow1=document.querySelector(".downArrow1")
    let downArrow2=document.querySelector(".downArrow2")
    let downArrow3=document.querySelector(".downArrow3")
    let title1=document.querySelector(".ft1")
    let title2=document.querySelector(".ft2")
    let title3=document.querySelector(".ft3")


upArrow1.addEventListener("click",function(){
    footerArticle1.style.display="block"
    footerArticle1.style.marginTop=0
    downArrow1.style.display="inline-block"
    upArrow1.style.display="none"
    title1.style.color="grey"  
})
downArrow1.addEventListener("click",function(){
    footerArticle1.style.display="none"
    downArrow1.style.display="none"
    upArrow1.style.display="inline-block"
    title1.style.color="white"  
})

upArrow2.addEventListener("click",function(){
    footerArticle2.style.display="block"
    footerArticle2.style.marginTop=0
    downArrow2.style.display="inline-block"
    upArrow2.style.display="none" 
    title2.style.color="grey" 
})
downArrow2.addEventListener("click",function(){
    footerArticle2.style.display="none"
    downArrow2.style.display="none"
    upArrow2.style.display="inline-block"
    title2.style.color="white"  
})

upArrow3.addEventListener("click",function(){
    footerArticle3.style.display="block"
    footerArticle3.style.marginTop=0
    downArrow3.style.display="inline-block"
    upArrow3.style.display="none"
    title3.style.color="grey"  
})
downArrow3.addEventListener("click",function(){
    footerArticle3.style.display="none"
    downArrow3.style.display="none"
    upArrow3.style.display="inline-block"
    title3.style.color="white"  
})

const mq = window.matchMedia("(min-width:768px)");//evalua si existe la media query



mq.addEventListener("change", () => {
    //si la media query matchea con los parametros definidos previamente
    if(mq.matches){
        title1.style.color="white"
        upArrow1.style.display="none"
        downArrow1.style.display="none"
        footerArticle1.style.display="block"

        title2.style.color="white"
        upArrow2.style.display="none"
        downArrow2.style.display="none"
        footerArticle2.style.display="block"

        title3.style.color="white"
        upArrow3.style.display="none"
        downArrow3.style.display="none"
        footerArticle3.style.display="block"
    }else{
        upArrow1.style.display="inline-block"
        footerArticle1.style.display="none"

        upArrow2.style.display="inline-block"
        footerArticle2.style.display="none"

        upArrow3.style.display="inline-block"
        footerArticle3.style.display="none"

    }

});

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dot1 = document.querySelector("#dot1");
    const dot2 = document.querySelector("#dot2");
    const dot3 = document.querySelector("#dot3");
    const dot4 = document.querySelector("#dot4");

    const carousel = document.querySelector(".carousel");

    if(carousel){

    var slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function avanzar(){
        return plusSlides(1)
    }
        
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    prevBtn.addEventListener("click",function(){
        plusSlides(-1)
    })
    
    nextBtn.addEventListener("click",function(){
        plusSlides(1)
    })
    
    dot1.addEventListener("click",function(){
        currentSlide(1)
    })
    
    dot2.addEventListener("click",function(){
        currentSlide(2)
    })
    
    dot3.addEventListener("click",function(){
        currentSlide(3)
    })

    dot4.addEventListener("click",function(){
        currentSlide(4)
    })
        
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        
    } 
    setInterval(avanzar,3500)
}

//zoom imagen product detail
    let mainProductImage = document.querySelector("#mainProductImage")
    let containerZoom = document.querySelector(".container-zoom")
    let closeZoom = document.querySelector(".close-zoom")

    if(mainProductImage){
        mainProductImage.addEventListener("click",function(){
                containerZoom.style.display = "flex"
            closeZoom.addEventListener("click",function(){
                containerZoom.style.display = "none"
        })
    })
}

//popUp guia de talles
let clickTalles = document.querySelector("#clickTalles")
let containerTalles = document.querySelector(".container-talles")
let closeTalles = document.querySelector(".close-talles")

if(clickTalles){
   clickTalles.addEventListener("click",function(e){
            e.preventDefault()
            containerTalles.style.display = "flex"
        closeTalles.addEventListener("click",function(){
            containerTalles.style.display = "none"
    })
})
}
})


























