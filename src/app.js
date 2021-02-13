const express= require("express");
const app= express();


app.use(express.static("../public"))


app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000");
});


//implementación de las rutas
const rutasMain= require("./routes/main");
app.use("/" , rutasMain);

const rutasProductos= require("./routes/productos");
app.use("/productos" , rutasProductos);

const rutasUsers= require("./routes/users");
app.use("/users" , rutasUsers);

const rutasMarcas= require("./routes/marcas");
app.use("/marcas" , rutasMarcas);




