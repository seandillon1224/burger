var express = require("express");

var router = express.Router();

var burger = require("../models/burgerModel.js");


router.get('/', function(req, res){
    burger.all(function(data){
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject)
    });
});

router.post("/create", function(req, res){  
    // newBurger;
    burger.create(req.body.burgerName, function(data){    
        res.redirect('/');
    });
});

router.post('/update/:id', function(req, res){
    console.log(req.params.id)
    
    burger.update(req.params.id, function(data){
        res.redirect('/');

    });

})



module.exports = router;