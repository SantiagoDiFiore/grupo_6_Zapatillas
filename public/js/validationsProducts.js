window.onload = function(){
    let form = document.querySelector("#formProducts")
    let button = document.querySelector('#submitButton')

    //Capturar los inputs de texto del productAdd y validar en tiempo real los mismos

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

    form.name.focus();

    name.addEventListener('blur',function(e){
        if(name.value.length < 5 ){
            name.classList.add('is-invalid');   
            nameError.innerText = "Debes ingresar un nombre con un minimo de 5 caracteres"
        } else {
            name.classList.remove('is-invalid');
            nameError.innerText = ""
            form.description.focus();
        }
    })

    description.addEventListener('blur',function(e){
        if(description.value.length < 20 ){
            description.classList.add('is-invalid');   
            descriptionError.innerText = "Debes ingresar una descripcion con un minimo de 20 caracteres"
        } else {
            description.classList.remove('is-invalid');
            descriptionError.innerText = ""
            form.price.focus();
        }
    })

    price.addEventListener('blur',function(e){
        if(price.value <= 0 ){
            price.classList.add('is-invalid');   
            priceError.innerText = "Debes ingresar un precio valido para el producto"
        } else {
            price.classList.remove('is-invalid');
            priceError.innerText = ""
            form.discount.focus();
        }
    })

    discount.addEventListener('blur',function(e){
        if(discount.value < 0 ){
            discount.classList.add('is-invalid');   
            discountError.innerText = "Debes ingresar un descuento para el producto"
        } else {
            discount.classList.remove('is-invalid');
            discountError.innerText = ""
        }
    })

    //capturar los campos que sean selects,radios,etc... y devolver las validaciones una vez que se intente submitir el formulario

    //image
    let image = document.querySelector('#image');
    let imageError = document.querySelector('#imageError');

    //genre
    let genre = document.querySelector('#genre');
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

    button.addEventListener(('click'),function(event){
        event.preventDefault()
        let errores = {}

        //name
        if(name.value.length < 5){
            errores.name = "Debes completar un nombre con un minimo de 5 caracteres"
        };

        //description
        if(description.value.length < 20){
            errores.description = "Debes completar una descripcion con un minimo de 20 caracteres"
        };

        //price
        if(price.value.length <= 0){
            errores.price = "Debes completar un precio valido para el producto"
        } ;
        
        //discount
        if(discount.value.length < 0){
            errores.discount = "Debes ingresar un descuento para el producto"
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

        //genre
        if(genre.value == 1){
            errores.genre = "Debes seleccionar un genero"
        };

        //brand
        if(brand.value == 1){
            errores.brand = "Debes seleccionar una marca"
        };

        //size
        if(size.value == 37){
            errores.size = "Debes seleccionar minimo un talle"
        };

        //color
        if(color.value == 1){
            errores.color = "Debes seleccionar un color"
        };

        //categories
        if(categories.value == 1){
            errores.categories = "Debes seleccionar una categoria"
        };

        console.log(image.value)

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
