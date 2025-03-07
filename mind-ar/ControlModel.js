console.log("hello")
let Models = document.getElementsByClassName("Model");

setInterval(function() {
    var Milliseconds = new Date().getMilliseconds();
    Models.forEach(Model => {
        if (Model.hasAttribute("rotation")) {
            let NewValue = Math.sin(Milliseconds / 500 * Math.PI)
            var NewRotation = "90 ".concat(NewValue, " 0");
            Model.setAttribute("rotation", NewRotation);
        }
    });
}, 20);