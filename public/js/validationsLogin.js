window.onload = function(){
    let form = document.querySelector(".form")
    let email = document.querySelector("#user")
    let password = document.querySelector("#password")
    let buttonSubmit = document.querySelector(".boton-login")
    let erName = document.querySelector(".erName")

    form.email.focus();

    email.addEventListener("blur",function(){
        const errors = {};
        if(email.value == ""){
            errors.name = "El campo de usuario debe estar lleno"
        }
        if(Object.keys(errors).length >= 1){
           erName.innerText = (errors.name) ? errors.name : " ";
       } 
    })
    
    buttonSubmit.addEventListener("click",function(event){
       
        const errors = {};

        if(email.value == ""){
            errors.name = "El campo de usuario debe estar lleno"
        }
        if(password.value == ""){
            errors.name = "El campo de contraseña debe estar lleno"
        }
        if(Object.keys(errors).length >= 1){
             event.preventDefault();
            erName.innerText = (errors.name) ? errors.name : " ";
        } else{
            form.submit();
        }
    })

}

