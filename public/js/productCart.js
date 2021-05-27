window.onload = function(){
    let buyButton = document.querySelector("#buyButton")
    let formProduct = document.querySelector("#formProduct")
    let tallesdisponibles = document.querySelectorAll(".boton-talle")
    let talles = ["37","38","39","40","41","42","43","44","45","46"]

    console.log(tallesdisponibles);
    buyButton.addEventListener("click",function(event){
       if(tallesdisponibles.includes(talles)){

       }else{
           alert("Hola")
       }
    })
}

    // buyButton.addEventListener("click",function(event){
   
       
    //     const errors = {};

    //     if(tallesdisponibles.value == ""){
    //         alert("Tienes que seleccionar un talle")
    //     }
    //     if(Object.keys(errors).length >= 1){
           
    //          alert("Tienes que seleccionar un talle")
    //          console.log(errors);
    //     } else{
    //         console.log(errors);
    //     }
    // })

    // tallesdisponibles.forEach(talle=>{
    //     if(talle.value == "" ){
    //     }else{
    //         alert("Hola")
    //     }
    // })