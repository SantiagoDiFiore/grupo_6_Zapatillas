const express= require("express");
const router= express.Router();
const path= require("path");
const publicPath= path.resolve("../public");
router.use(express.static(publicPath));


router.get('/', (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
});








module.exports=router;