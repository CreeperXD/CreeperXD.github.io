console.log("hello")
const Models = document.getElementsByClassName("Model");

setInterval(function() {
    Models.forEach(UpdateRotation);
}, 20);

function UpdateRotation(Model) {
    var Milliseconds = new Date().getMilliseconds();
    if (Model.hasAttribute("rotation")) {
        let NewValue = Math.sin(Milliseconds / 500 * Math.PI)
        var NewRotation = "90 ".concat(NewValue, " 0");
        Model.setAttribute("rotation", NewRotation);
    }
}