const express= require("express");
const app= express();

const path= require("path");
const publicPath= path.resolve("./public");
app.use(express.static(publicPath));


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




/*app.get('/', (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve("./views/productCart.html"));
});
app.get("/productDetail" , (req,res)=>{
    res.sendFile(path.resolve("./views/productDetail.html"))
});
app.get("/login" , (req,res)=>{
    res.sendFile(path.resolve("./views/login.html"))
});
app.get("/register" , (req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
});


app.post("/register" , (req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
});
*/