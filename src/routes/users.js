const express= require("express");
const router= express.Router();
const path= require("path");


router.get("/login" , (req,res)=>{
    res.sendFile(path.resolve("./views/login.html"))
});
router.get("/register" , (req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
});


router.post("/register" , (req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
});









module.exports=router;