const mainController = {
    index:(req, res) => {
        res.render("index" ,{titulo:"Home"});
    }
}  

module.exports = mainController