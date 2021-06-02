### **Descripción del proyecto** 
>El sitio de zapatillas que estamos diseñando está orientado a todo tipo de consumidores, ya sea que necesiten un calzado deportivo o algo con un estilo urbano/casual.
Buscamos desarrollar un site que sea funcional para los usuarios, con un diseño agradable y buena usabilidad.

### **Integrantes del equipo** 

- **Sebastián Barciela**: tengo 36 años, me dedico hace muchos años a la gastronomía, me gusta la musica, el cine y la fotografía.El curso de full stack es un desafio y una busqueda de nuevos horizontes profesionales.
- **Ramiro Tanquias**: tengo 18 años y tengo muchas ganas de aprender a programar.
- **Santiago Di Fiore**: Tengo 23 años y soy de Buenos Aires. Vengo trabajando con programacion en otros lenguajes hace 2 años y comence el curso para afirmar mis conocimientos y darle un tono mas profesional. 

### **Sitios de referencia**

- https://www.moovbydexter.com.ar/home
- https://www.dafiti.com.ar/
- https://www.grid.com.ar/
- https://www.adidas.com.ar/
- https://www.chelsea.com.ar/

Seleccionamos estos sitios ya que apuntan al mismo público que nuestro proyecto y ofrecen servicios similares. Ademas son visualmente atractivos, dinámicos y funcionales.

### **Link al tablero de tareas**
https://trello.com/b/lSxkTdql/grupo6zapatillas

### **- Sprint N°1/Notas**
Incluimos (en la carpeta Design), tipografía, paleta de colores y boceto del logo, los cuales continuaremos desarrollando y puliendo.

### **- Sprint N°2/Notas**
-Actualizamos (en la carpeta Design), la paleta de colores y relizamos un nuevo logo. 
-Generamos el estilo visual de las secciones solicitadas, algunas funcionalidades estan limitadas momentaneamente.(JS)
-El acceso al register.html se realiza a traves del botón del login"Crear nueva Cuenta".
-El acceso al productDetail.html está vinculado al producto "Adidas ozweego orange" del home.html(destacados).

### **- Sprint N°3/Notas**
-Generamos vistas dinamicas para los productos recomendados/destacados.
-Los titulos de las pestañas de cada seccion tambien se muestran de forma dinámica.
-El listado de todos los productos se encuentra en http://localhost:3000/productos (se generan de forma dinamica, por ahora la info es leida desde un array de objetos que se encuentra en el controlador)
-Al reorganizar la estructura del sitio el entry point se movió dentro del directorio SRC.
-Continuamos puliendo el css y agregamos algunas transiciones.
-El acceso a los formularios de carga y edicion de productos es a traves de las rutas:(http://localhost:3000/productos/productAdd) y
(http://localhost:3000/productos/productEdit).

### **- Sprint N°4/Notas**
-Incorporamos los botones de edicion y eliminacion en el detalle del producto.
-Renombramos las rutas y los controladores con los nombres sugeridos en el pdf del sprint.
-Agregamos la funcionalidad del search en el header.
-Agregamos la vista de error 404(debemos estilarla un poco más).

### **- Sprint N°5/Notas**
-Incorporamos validaciones para el register y el login, con persistencia de datos para los casos que correspondia.
-Creamos el directorio middlewares y ubicamos alli las validaciones y los middlewares para usuarios logueados y visitantes.
-Creamos una vista básica para el perfil de usuario.(tambien se muestra la imagen de perfil en el header)
-Continuamos estilando algunos detalles del sitio. 
-Mejoramos las rutas de algunos links (ej:hombre, mujer , etc)

### **- Sprint N°6/Notas**
-Dentro de la carpeta kicks-db se encuentra el DER, la base de datos (kicks_db.sql), y los archivos data y structure que solicitaban en el sprint.
-Pudimos implementar el carrito de compras(Si el usuario está logueado, permite el acceso al carrito, si no lo está, lo redirecciona al login o register).
-Si el carrito no tiene productos, incorporamos una vista que indica que el carrito está vacío.
-Al agregar un producto al carrito, desde el detail, este se almacena en una tabla de la base de datos, llamada product_cart. Luego se muestran los productos en la vista, y al finalizar la compra, se muestra una vista con el resumen.
-Actualizamos el metodo search, para que busque en la base de datos. Si no se encuentra el producto, la vista va a indicar que no hubo resultados.

### **- Sprint N°7/Notas**
-Agregamos las validaciones backend que nos faltaban(creación de productos y edición).
-Implementamos validaciones frontend de todos los formularios del sitio(onBlur y onSubmit).
-Aplicamos interacciones con Js en las vistas (carrusel, burguer menu, boton de suscripcion al newsletter y botones de eliminacion de productos y usuarios).
