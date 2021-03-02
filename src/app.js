const express= require("express");
const app= express();
const path=require("path");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.use(express.static("../public"))


app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000");
});


//implementación de las rutas
const rutasMain= require("./routes/main");
app.use("/" , rutasMain);

<<<<<<< HEAD
const rutasProductos= require("./routes/productos");
=======
const rutasProductos= require("./routes/products");
>>>>>>> fd9d08cfad2d16c0b5e6257f5bd04268c8a951e1
app.use("/products" , rutasProductos);

const rutasUsers= require("./routes/users");
app.use("/users" , rutasUsers);

const rutasMarcas= require("./routes/marcas");
app.use("/marcas" , rutasMarcas);

//definiendo el motor de plantillas

app.set("view engine", "ejs");




