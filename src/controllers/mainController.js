const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index:(req, res) => {
        res.render("index" ,{titulo:"Kicks - Inicio" ,products: products, toThousand});
    },
    search:(req,res)=>{
        const search=req.query.search; //variable para guardar la info del campo de busqueda(name del input de busqueda)
        const resultadoBusqueda= products.filter(product=>product.name.toLowerCase().includes(search));//guarda en un array todos los productos que incluyan en su nombre la/s palabras buscadas
        
        res.render("search",{titulo:"Resultado de tu busqueda" , products:resultadoBusqueda , toThousand, search:search})
    }
}  








module.exports = mainController