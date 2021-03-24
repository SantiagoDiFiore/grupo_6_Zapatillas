//1-guardar usuario en la base de datos
//2-buscar al usuario que se quiere loguear por su mail
//3-buscar un usuario por su id
//4-editar la informacion de un usuario
//5-eliminar a un usuario de la base de datos
const fs=require("fs");
const path = require('path');





const User={
    filename: path.join(__dirname, '../data/users.json'),
    //ubicacion del archivo de usuarios base de datos.
   
    //metodo para devolver toda la informacion del json parseada
    getdata:function(){
        return JSON.parse(fs.readFileSync(this.filename , "utf-8"))
    },

    //metodo para obtener todos los usuarios-ejecuta getdata
    findAll:function(){
        return this.getdata();
    },

    generateId:function(){
    let allUsers=this.findAll();//todos los usuarios en formato array
     //definir el id del producto
        let ids = allUsers.map(p=>p.id);//guardar en un array todos los ids
        let id= Math.max(...ids)+1;//filtra el mayor de los ids del array, se le suma 1 para el id del nuevo producto
        
    
      return id  
    },

    //metodo para buscar un usuario por id (por pk=primary key)
    findByPk:function(id){
        let allUsers=this.findAll();//todos los usuarios en formato array

        let userFound= allUsers.find(user=>user.id==id);//filter para encontrar un usuario
        return userFound

    },
    //metodo para buscar por cualquier de los campos del usuario
    findByField:function(field , text){
        let allUsers=this.findAll();//todos los usuarios en formato array

        let userFound= allUsers.find(user=>user[field]==text);//filter para encontrar un usuario que recibe cualquiera de las clave del objeto 
        return userFound

    },

    //metodo para guardar un nuevo usuario en la base de datos(recibe por parametro los datos de un usuario)
    create:function(userData){
        let allUsers=this.findAll();//todos los usuarios en formato array
        let newUser={
            id:this.generateId(),
            ...userData,
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers ,null ," "))
        return newUser
    },

    delete:function(id){
    let allUsers=this.findAll();//todos los usuarios en formato array
    let filterUser=allUsers.filter(user=>user.id!=id); //nuevo array que no incluye al id que se pasa
    fs.writeFileSync(this.filename, JSON.stringify(filterUser ,null ," "))
        return true


    }
   
    
}


module.exports=User;