window.onload = function(){
    let form = document.querySelector("#formRegister");
    let button = document.querySelector('#submitButton');

    //first name
    let firstName = document.querySelector("#firstName")
    let firstNameError = document.querySelector("#firstNameError");

    //last name
    let lastName = document.querySelector("#lastName")
    let lastNameError = document.querySelector("#lastNameError");

    //email
    let email = document.querySelector("#email");
    let emailError = document.querySelector("#emailError");
    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //password
    let password = document.querySelector("#password");
    let passwordError = document.querySelector("#passwordError");
    
    //checkPassword
    let checkPassword = document.querySelector("#checkPassword");
    let checkPasswordError = document.querySelector("#checkPasswordError");
    
    //birthday
    let birthday = document.querySelector('#birthday');
    let birthdayError = document.querySelector('#birthdayError');

    //gender
    let gender = document.getElementsByName('gender');
    let genderError = document.querySelector('#genderError');
 
    //image
    let image = document.getElementById("image")
    let imageError = document.querySelector('#imageUserError');

    //terms
    let terms = document.getElementsByName('terms');
    
    
    firstName.addEventListener('blur',function(e){
        if(firstName.value == "" ){
            firstName.classList.add('is-invalid-front');   
            firstNameError.innerText = "Tienes que escribir un nombre"
        }else if(firstName.value.length < 2){
            firstName.classList.add('is-invalid-front');  
            firstNameError.innerText = "Debes usar 2 caracteres o más"
        } else {
            firstName.classList.remove('is-invalid-front');
            firstNameError.innerText = ""
            form.lastName.focus();
        }
    })

    lastName.addEventListener('blur',function(e){
        if(lastName.value == "" ){
            lastName.classList.add('is-invalid-front');   
            lastNameError.innerText = "Tienes que escribir un apellido"
        }else if(lastName.value.length < 2){
            lastName.classList.add('is-invalid-front');   
            lastNameError.innerText = "Debes usar 2 caracteres o más"
        } else {
            lastName.classList.remove('is-invalid-front');
            lastNameError.innerText = ""
        }
    })

    birthday.addEventListener('blur',function(e){
        if(birthday.value == "" ){
            birthday.classList.add('is-invalid-front');   
            birthdayError.innerText = "Tienes que completar tú fecha de nacimiento"
        } else {
            birthday.classList.remove('is-invalid-front');
            birthdayError.innerText = ""
        }
    })

    email.addEventListener('blur',function(e){
        if(email.value == "" ){
            email.classList.add('is-invalid-front');   
            emailError.innerText = "Tienes que ingresar un correo electronico"
        } else if(!email.value.match(mailFormat)){
            emailError.innerText = "Debes ingresar un formato de correo valido"
            email.classList.add('is-invalid-front');  
        } else {
            email.classList.remove('is-invalid-front');
            emailError.innerText = ""
        }
    })
    
    password.addEventListener('blur',function(e){
        if(password.value == "" ){
            password.classList.add('is-invalid-front');  
            passwordError.innerText = "Tienes que escribir una contraseña"
        }else if(password.value.length < 8){
            password.classList.add('is-invalid-front');   
            passwordError.innerText = "Debes usar 8 caracteres o más"
        }else if(!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")){
            password.classList.add('is-invalid-front');   
            passwordError.innerText = "Debe incluir letras mayúsculas, minúsculas, al menos un número y un carácter especial"
        } else {
            password.classList.remove('is-invalid-front');
            passwordError.innerText = ""
        }
    })

    checkPassword.addEventListener('blur',function(e){
        if(checkPassword.value == "" ){
            checkPassword.classList.add('is-invalid-front');    
            checkPasswordError.innerText = "Tienes que repetir tu contraseña"
        }else if(checkPassword.value.length < 8){
            checkPassword.classList.add('is-invalid-front');   
            checkPasswordError.innerText = "Debes usar 8 caracteres o más"
        }else if(!checkPassword.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")){
            checkPassword.classList.add('is-invalid-front');    
            checkPasswordError.innerText = "Debe incluir letras mayúsculas, minúsculas, al menos un número y un carácter especial"
        } else {
            checkPassword.classList.remove('is-invalid-front');
            checkPasswordError.innerText = ""
        }
    })

    image.addEventListener("change", validateFile)
        function validateFile(){
            const acceptedExtensions =  ['jpg','jpeg','png','gif'];
                    
            const { name:fileName } = this.files[0];
            
            const fileExtension = fileName.split(".").pop();
        
            if(!acceptedExtensions.includes(fileExtension)){
                image.classList.add('is-invalid-front');
                imageError.innerText = "Las extensiones aceptadas son "+ acceptedExtensions.join(", ");
            
                this.value = null;
            }else{
                image.classList.remove('is-invalid-front');
                imageError.innerText = ""
      }
    }

    button.addEventListener(('click'),function(event){
        event.preventDefault()
        let errores = {};

        //first name
        if(firstName.value == ""){
            errores.firstName = "Tienes que escribir un nombre"
            firstName.classList.add('is-invalid-front');  
        }else if(firstName.value.length < 2){  
            errores.firstName = "Debes usar 2 caracteres o más"
        };

        //last name
        if(lastName.value == ""){
            errores.lastName = "Tienes que escribir un apellido"
            lastName.classList.add('is-invalid-front');  
        }else if(lastName.value.length < 2){  
            errores.lastName = "Debes usar 2 caracteres o más"
        };
        
        //birthday
        if(birthday.value == ""){
            errores.birthday = "Tienes que completar tú fecha de nacimiento"
            birthday.classList.add('is-invalid-front');  
        };
        
        //gender
        if (!(gender[0].checked || gender[1].checked  || gender[2].checked)) {
            errores.gender = "Debes seleccionar un genero";
        }
        
        //email
        if(email.value == ""){
            errores.email = "Tienes que ingresar un correo electronico"
            email.classList.add('is-invalid-front');  
        } else if(!email.value.match(mailFormat)){
            errores.email = "Debes ingresar un formato de correo valido"
        };

        //password
        if(password.value == ""){
            errores.password = "Tienes que escribir una contraseña"
            password.classList.add('is-invalid-front');  
        }else if(password.value.length < 8){
            errores.password = "Debes usar 8 caracteres o más"
        }else if(!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")){
            errores.password = "Debe incluir letras mayúsculas, minúsculas, al menos un número y un carácter especial"
        };

        //check password
        if(checkPassword.value == ""){
            errores.checkPassword = "Tienes que repetir tu contraseña"
            checkPassword.classList.add('is-invalid-front');  
        }else if(checkPassword.value.length < 8){
            errores.checkPassword = "Debes usar 8 caracteres o más"
        }else if(!checkPassword.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")){
            errores.checkPassword = "Debe incluir letras mayúsculas, minúsculas, al menos un número y un carácter especial"
        };

        //image
        const filePath = image.value;
        if(filePath == ''){
            errores.image = "Tienes que subir una imagen"
            image.classList.add('is-invalid-front');  
        };
        
        let modalSuscripcion = document.querySelector("#suscripcion");
        let botonCerrarSuscripcion = document.querySelector("#cerrarSuscripcion");
        
        if(Object.keys(errores).length >= 1){
            firstNameError.innerText = (errores.firstName) ? errores.firstName : ' ';

            lastNameError.innerText = (errores.lastName) ? errores.lastName : ' ';

            emailError.innerText = (errores.email) ? errores.email : ' ';

            passwordError.innerText = (errores.password) ? errores.password : ' ';

            checkPasswordError.innerText = (errores.checkPassword) ? errores.checkPassword : ' ';

            birthdayError.innerText = (errores.birthday) ? errores.birthday : ' ';

            genderError.innerText = (errores.gender) ? errores.gender : ' ';

            imageError.innerText = (errores.image) ? errores.image : ' ';
            
        } else {
            if (!(terms[0].checked)) {
                    modalSuscripcion.style.display = "block";
                botonCerrarSuscripcion.addEventListener("click",function(){
                    modalSuscripcion.style.display = "none"
                });
            }

            form.submit();
        }

    })

}