const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {

    //muestra todos los productos
    index: (req, res) => {
        res.render("./products/products" ,{titulo:"Productos" , products: products, toThousand})
    },

    //muetra detalle de un producto
    detail: (req,res)=>{
        let parametro=req.params.id;
        let titulo= products.find(producto=>producto.id==parametro);

        let producto= products.find(product=> product.id == req.params.id);
		
		
        res.render("./products/productDetail",{ titulo:titulo.name ,producto: producto ,products:products, parametro:parametro, toThousand})
    },

    //muestra el formulario de creacion de producto
    create: (req,res)=>{
        res.render("./products/productAdd",{titulo:"Nuevo Producto"})
    },
    //acción de creacion del producto
    store: (req,res)=>{
        //filtrar y definir la imagen del prodcuto
        let image
        if(!req.file){
            image="default-image.jpg";
        }else{
            image=req.file.filename;
        };

        //definir el id del producto
        let ids = products.map(p=>p.id);//guardar en un array todos los ids
        let id= Math.max(...ids)+1;//filtra el mayor de los ids del array, se le suma 1 para el id del nuevo producto
		
        //definir el nuevo producto
        let newProduct = {
			id: id,        //el id definido previamente
			...req.body,   //todo lo que llega del formulario
			imagenProducto: image   //la imagen definida previamente
		};
console.log(req.body);
console.log("-----------------")
console.log(newProduct);

        products.push(newProduct);//guardar el producto nuevo en el listado de productos
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))//sobreescribir el Json con los productos actualizados y pasados a formatoJSON. 
        res.redirect("./products")//redirigir al listado de productos. 
    },

    //muestra el formulario de edicion de un producto
    edit: (req,res)=>{
        let producto= products.find(product=> product.id == req.params.id);
        res.render("./products/productEdit",{titulo:"Modificar Producto", producto: producto})
    },
    //accion de edición del producto
    update: (req,res)=>{
        
    },

    //accion de borrado de un producto
    destroy: (req,res)=>{
        res.send("producto eliminado")
    },


    productCart: (req, res) => {
        res.render("./products/productCart" ,{titulo:"Carrito", products:products , toThousand})
    },
    
    
    

}  

module.exports = productsController