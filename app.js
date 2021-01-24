const express= require("express");
const app= express();

const path= require("path");
const publicPath= path.resolve("./public");
app.use(express.static(publicPath));


app.listen(3000, ()=>{
    console.log("servidor corriendo en puerto 3000");
});
