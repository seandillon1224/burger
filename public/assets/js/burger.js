$(".burgerButton").on("click", function (event) {
        event.preventDefault();
        var $newItemInput = $("input.burgerForm");
        var newBurger = $newItemInput.val().trim()
        
        var burgerObject = {burgerName: newBurger};
        console.log(burgerObject.burgerName + "this log from javascript");
        
        $.post("/create", burgerObject, function(data){
          
        });
    });