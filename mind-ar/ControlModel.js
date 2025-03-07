console.log("hello");
const Models = document.getElementsByClassName("Model");

var Speed = 0.5

setInterval(function() {
    var Milliseconds = new Date().getMilliseconds();
    console.log(Models.length)
    for (let i = 0; i < Models.length; i++) {
        const Model = Models[i];
        if (Model.hasAttribute("rotation")) {
            let NewValue = Math.sin(Milliseconds / 500 * Math.PI * Speed) * 180;
            var NewRotation = "90 ".concat(NewValue, " 0");
            console.log(NewRotation);
            Model.setAttribute("rotation", NewRotation);
        }
    }
}, 20);