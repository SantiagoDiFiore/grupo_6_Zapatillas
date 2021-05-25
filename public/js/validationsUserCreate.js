window.onload = function(){
    let form = document.querySelector("#formRegister");
    let button = document.querySelector('#submitButton');

    form.firstName.focus();

    //first name
    let firstName = document.querySelector("#firstName")
    let firstNameError = document.querySelector("#firstNameError");

    //last name
    let lastName = document.querySelector("#lastName")
    let lastNameError = document.querySelector("#lastNameError");

    //email
    let email = document.querySelector("#email");
    let emailError = document.querySelector("#emailError");

    //password
    let password = document.querySelector("#password");
    let passwordError = document.querySelector("#passwordError");

    //checkPassword
    let checkPassword = document.querySelector("#checkPassword");
    let checkPasswordError = document.querySelector("#checkPasswordError");



    firstName.addEventListener('blur',function(e){
        if(firstName.value.length < 2 ){
            firstName.classList.add('is-invalid');   
            firstNameError.innerText = "Debes ingresar un nombre con un minimo de 2 caracteres"
        } else {
            firstName.classList.remove('is-invalid');
            firstName.innerText = ""
            form.lastName.focus();
        }
    })

    lastName.addEventListener('blur',function(e){
        if(lastName.value.length < 2 ){
            lastName.classList.add('is-invalid');   
            lastNameError.innerText = "Debes ingresar un apellido con un minimo de 2 caracteres"
        } else {
            lastName.classList.remove('is-invalid');
            lastNameError.innerText = ""
        }
    })

    email.addEventListener('blur',function(e){
        if(email.value.length < 1 ){
            email.classList.add('is-invalid');   
            emailError.innerText = "Debes ingresar un correo electronico"
        } else {
            email.classList.remove('is-invalid');
            emailError.innerText = ""
            
        }
    })

    password.addEventListener('blur',function(e){
        if(password.value.length < 1 ){
            password.classList.add('is-invalid');   
            passwordError.innerText = "Debes ingresar una contraseña"
        } else {
            password.classList.remove('is-invalid');
            passwordError.innerText = ""
            
        }
    })

    checkPassword.addEventListener('blur',function(e){
        if(checkPassword.value.length < 1 ){
            checkPassword.classList.add('is-invalid');   
            checkPasswordError.innerText = "Debes confirmar la contraseña"
        } else {
            checkPassword.classList.remove('is-invalid');
            checkPasswordError.innerText = ""
            
        }
    })

    //birthday
    let birthday = document.querySelector('#birthday');
    let birthdayError = document.querySelector('#birthdayError');

    //gender
    let gender = document.querySelector('#gender');
    let genderError = document.querySelector('#genderError');

    //image
    let image = document.querySelector('#image');
    let imageError = document.querySelector('#imageError');


    button.addEventListener(('click'),function(event){
        event.preventDefault()
        let errores = {};

        //first name
        if(firstName.value.length < 1){
            errores.firstName = "Debes ingresar un nombre con un minimo de 2 caracteres"
        };

        //last name
        if(lastName.value.length < 1){
            errores.lastName = "Debes ingresar un apellido con un minimo de 2 caracteres"
        };

        //email
        let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.value.length < 1){
            errores.email = "Debes ingresar un correo electronico"
        } else {
            if(!email.value.match(mailFormat)){
                errores.email = "Debes ingresar un formato de correo valido"
            }
        };

        //password
        if(password.value.length == 0){
            errores.password = "Debes ingresar una contraseña"
        };

        //check password
        if(checkPassword.value.length == 0){
           errores.checkPassword = "Debes confirmar contraseña"
        };

        //birthday
        if(birthday.value == ' '){
            errores.birthday = "Debes indicar una fecha de nacimiento"
        };

        //gender
        if(gender.value == 1){
            errores.gender = "Debes seleccionar un genero"
        };

        //image
        let filePath = image.value;
        let acceptedExtensions=[".jpg", ".png" , ".gif"];
        let fileExtension = filePath.split('.').pop();
        if(filePath == ''){
            errores.image = "Debes ingresar una imagen para el producto"
        } else {
            if(!acceptedExtensions.includes(fileExtension)){
                errores.image = "Las extensiones aceptadas son "+ acceptedExtensions.join(",");
              }
        };


        console.log(password.value)
        console.log(checkPassword.value)
        console.log(birthday.value)
        console.log(gender.value)
        console.log(image.value)
        

        if(Object.keys(errores).length >= 1){
            firstNameError.innerText = (errores.firstName) ? errores.firstName : ' ';

            lastNameError.innerText = (errores.lastName) ? errores.lastName : ' ';

            emailError.innerText = (errores.email) ? errores.email : ' ';

            discountError.innerText = (errores.discount) ? errores.discount : ' ';

            passwordError.innerText = (errores.password) ? errores.password : ' ';

            checkPasswordError.innerText = (errores.checkPassword) ? errores.checkPassword : ' ';

            birthdayError.innerText = (errores.birthday) ? errores.birthday : ' ';

            genderError.innerText = (errores.gender) ? errores.gender : ' ';

            imageError.innerText = (errores.image) ? errores.image : ' ';
            
        } else {
            form.submit();
        }


    })



}