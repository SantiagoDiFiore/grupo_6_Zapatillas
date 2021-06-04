window.onload = function(){
    let form = document.querySelector("#formProducts")
    let button = document.querySelector('#submitButton')

    //Capturar los inputs de texto del productAdd

    //name
    let name = document.querySelector("#name")
    let nameError = document.querySelector("#nameError");

    //description
    let description = document.querySelector('#description');
    let descriptionError = document.querySelector('#descriptionError');

    //precio
    let price = document.querySelector('#price');
    let priceError = document.querySelector('#priceError');

    //discount
    let discount = document.querySelector('#discount');
    let discountError = document.querySelector('#discountError');

    //capturar los campos que sean selects,radios,etc... 
    
    //image
    let image = document.getElementById("image")
    let imageError = document.querySelector('#imageError');

    //genre
    let genre = document.getElementsByName('genre');
    let genreError = document.querySelector('#genreError');

    //brand
    let brand = document.querySelector('#brand');
    let brandError = document.querySelector('#brandError');

    //size
    let size = document.querySelector('#size');
    let sizeError = document.querySelector('#sizeError');

    //color 
    let color = document.querySelector('#colors');
    let colorError = document.querySelector('#colorsError');

    //categories
    let categories = document.querySelector('#category');
    let categoriesError = document.querySelector('#categoryError');

    name.addEventListener('blur',function(e){
        if(name.value == "" ){
            name.classList.add('is-invalid-front');   
            nameError.innerText = "Tienes que ingresar un nombre para el producto"
        }else if(name.value.length < 5){
            name.classList.add('is-invalid-front');   
            nameError.innerText = "Debes usar 5 caracteres o más"
        } else {
            name.classList.remove('is-invalid-front');
            nameError.innerText = ""
        }
    })

    description.addEventListener('blur',function(e){
        if(description.value == "" ){
            description.classList.add('is-invalid-front');   
            descriptionError.innerText = "Tienes que ingresar una descripcion para el producto"
        }else if(description.value.length < 20){
            description.classList.add('is-invalid-front');   
            descriptionError.innerText = "Debes usar 20 caracteres o más"
        } else {
            description.classList.remove('is-invalid-front');
            descriptionError.innerText = ""
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

    brand.addEventListener('blur',function(e){
        if(brand.value == 1 ){
            brand.classList.add('is-invalid-front');   
            brandError.innerText = "Tienes que seleccionar una marca"
        } else {
            brand.classList.remove('is-invalid-front');
            brandError.innerText = ""
        }
    })

    color.addEventListener('blur',function(e){
        if(color.value == 1 ){
            color.classList.add('is-invalid-front');   
            colorError.innerText = "Tienes que seleccionar un color"
        } else {
            color.classList.remove('is-invalid-front');
            colorError.innerText = ""
        }
    })

    categories.addEventListener('blur',function(e){
        if(categories.value == 1 ){
            categories.classList.add('is-invalid-front');   
            categoriesError.innerText = "Tienes que seleccionar una categoría"
        } else {
            categories.classList.remove('is-invalid-front');
            categoriesError.innerText = ""
        }
    })

    price.addEventListener('blur',function(e){
        if(price.value == "" ){
            price.classList.add('is-invalid-front');   
            priceError.innerText = "Debes ingresar un precio para el producto" 
        }else if(price.value <= 0){
            price.classList.add('is-invalid-front');   
            priceError.innerText = "Debes ingresar un precio valido para el producto"
        }else {
            price.classList.remove('is-invalid-front');
            priceError.innerText = ""
        }
    })

    discount.addEventListener('blur',function(e){
        if(discount.value == "" ){
            discount.classList.add('is-invalid-front');   
            discountError.innerText = "Debes ingresar un descuento para el producto"
        }else if(discount.value < 0){
            discount.classList.add('is-invalid-front');   
            discountError.innerText = "Debes ingresar un descuento valido para el producto"
        }else{
            discount.classList.remove('is-invalid-front');
            discountError.innerText = ""
        }
    })
    
    button.addEventListener(('click'),function(event){
        event.preventDefault()
        let errores = {}
        
        //name
        if(name.value == ""){
            errores.name = "Tienes que ingresar un nombre para el producto"
            name.classList.add('is-invalid-front');  
        }else if(name.value.length <5){  
            errores.name = "Debes usar 5 caracteres o más"
        };

        //description
        if(description.value == ""){
            errores.description = "Tienes que ingresar una descripcion para el producto"
            description.classList.add('is-invalid-front');  
        }else if(description.value.length < 20){   
            errores.description = "Debes usar 20 caracteres o más"
        };

        //image
        const filePath = image.value;
        if(filePath == ''){
            errores.image = "Tienes que subir una imagen"
            image.classList.add('is-invalid-front');  
        };

        //genre
        if (!(genre[0].checked || genre[1].checked  || genre[2].checked)) {
            errores.genre = "Debes seleccionar un genero";
        }

        //brand
        if(brand.value == 1){
            errores.brand = "Tienes que seleccionar una marca"
            brand.classList.add('is-invalid-front');  
        };

        //color
        if(color.value == 1){
            errores.color = "Tienes que seleccionar un color"
            color.classList.add('is-invalid-front');  
        };

        //categories
        if(categories.value == 1){
            errores.categories = "Tienes que seleccionar una categoría"
            categories.classList.add('is-invalid-front');  
        };

        //price
        if(price.value == ""){
            price.classList.add('is-invalid-front'); 
            errores.price = "Debes ingresar un precio para el producto"
        }else if(price.value <= 0){
            errores.price = "Debes ingresar un precio valido para el producto"
        };
        
        //discount
        if(discount.value == ""){
            discount.classList.add('is-invalid-front');   
            errores.discount = "Debes ingresar un descuento para el producto"
        }else if(discount.value < 0){
            errores.discount = "Debes ingresar un descuento valido para el producto"
        };

        //chequea los errores
        if(Object.keys(errores).length >= 1){
            nameError.innerText = (errores.name) ? errores.name : ' ';

            descriptionError.innerText = (errores.description) ? errores.description : ' ';

            priceError.innerText = (errores.price) ? errores.price : ' ';

            discountError.innerText = (errores.discount) ? errores.discount : ' ';

            imageError.innerText = (errores.image) ? errores.image : ' ';

            genreError.innerText = (errores.genre) ? errores.genre : ' ';

            brandError.innerText = (errores.brand) ? errores.brand : ' ';

            sizeError.innerText = (errores.size) ? errores.size : ' ';

            colorError.innerText = (errores.color) ? errores.color : ' ';
            
            categoriesError.innerText = (errores.categories) ? errores.categories : ' ';

        } else {
            form.submit();
        }

    })
    
}
