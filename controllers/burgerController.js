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
    console.log(req.body)
    burger.create(req.body.item, function(data){
        res.redirect('/');
    })
});

router.post('/update', function(req, res){
    burger.update(req.body.id, function(res){
        console.log(req.body.id)
        res.redirect('/');

    });

})



module.exports = router;