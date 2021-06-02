window.onload = function(){
    let form = document.querySelector(".form")
    let email = document.querySelector("#user")
    let password = document.querySelector("#password")
    let buttonSubmit = document.querySelector(".boton-login")
    let erName = document.querySelector(".erName")
    let erPassword = document.querySelector(".erPassword")
    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    

    email.addEventListener('blur',function(e){
        if(email.value == "" ){
            email.classList.add('is-invalid-front'); 
            erName.innerText = "Tienes que ingresar un correo electronico"
        } else if(!email.value.match(mailFormat)){
            erName.innerText = "Debes ingresar un formato de correo valido"
            email.classList.add('is-invalid-front');   
        } else {
            email.classList.remove('is-invalid-front');
            erName.innerText = ""
        }
    })

    password.addEventListener('blur',function(e){
        if(password.value == "" ){
            password.classList.add('is-invalid-front');     
            erPassword.innerText = "Tienes que ingresar una contraseña"
        } else {
            password.classList.remove('is-invalid-front');
            erPassword.innerText = ""
        }
    })

    buttonSubmit.addEventListener(('click'),function(event){
        event.preventDefault()
        let errores = {};

        if(email.value == ""){
            errores.email = "Tienes que ingresar un correo electronico"
            email.classList.add('is-invalid-front');  
        } else {
            if(!email.value.match(mailFormat)){
                errores.email = "Debes ingresar un formato de correo valido"
            }
        };
    
        if(password.value == ""){
            errores.password = "Tienes que ingresar una contraseña"
            password.classList.add('is-invalid-front');  
        };

        if(Object.keys(errores).length >= 1){
            erName.innerText = (errores.email) ? errores.email : ' ';
           
            erPassword.innerText = (errores.password) ? errores.password : ' ';
           

        } else {
            form.submit();
        }
    })
} 

