window.onload = function(){
    let buyButton = document.querySelector("#buyButton")
    let formProduct = document.querySelector("#formProduct")
    let tallesdisponibles = document.querySelector(".boton-talle")
    
    console.log(tallesdisponibles);

    buyButton.addEventListener("click",function(event){
   
       
        const errors = {};

        if(tallesdisponibles.value == ""){
            alert("Tienes que seleccionar un talle")
        }
        if(Object.keys(errors).length >= 1){
           
             alert("Tienes que seleccionar un talle")
             console.log(errors);
        } else{
            console.log(errors);
        }
    })
}