console.log("hello");
const Models = document.getElementsByClassName("CarModel");

var Speed = 1

setInterval(function() {
    var Milliseconds = new Date().getMilliseconds();
    for (let i = 0; i < Models.length; i++) {
        const Model = Models[i];
        if (Model.hasAttribute("rotation")) {
            let NewValue = Milliseconds / 1000 * Speed * 360;
            var NewRotation = "90 ".concat(NewValue, "0 ");
            console.log(NewRotation);
            Model.setAttribute("rotation", NewRotation);
        }
    }
}, 20);