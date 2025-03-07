console.log("hello");
const Models = document.getElementsByClassName("CarModel");

setInterval(function() {
    var Milliseconds = new Date().getMilliseconds();
    for (let i = 0; i < Models.length; i++) {
        const Model = Models[i];
        if (Model.hasAttribute("rotation")) {
            let NewValue = Milliseconds / 1000 * 360;
            var NewRotation = "0 0 ".concat(NewValue);
            console.log(NewRotation);
            Model.setAttribute("rotation", NewRotation);
        }
    }
}, 20);