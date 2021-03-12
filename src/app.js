// ************ Require's ************
const express= require("express");
const path=require("path");
const methodOverride=require("method-override");

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'))
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - (don't touch) ************
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// ************ WRITE YOUR CODE FROM HERE ************
app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000");
});

// ************ Route System require and use() ************
const rutasMain= require("./routes/main");
app.use("/" , rutasMain);

const rutasProductos= require("./routes/products");
app.use("/products" , rutasProductos);

const rutasUsers= require("./routes/users");
app.use("/users" , rutasUsers);

const rutasMarcas= require("./routes/marcas");
app.use("/marcas" , rutasMarcas);

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{titulo:"error 404"});
});

// ************ exports app - dont'touch ************
module.exports = app;





