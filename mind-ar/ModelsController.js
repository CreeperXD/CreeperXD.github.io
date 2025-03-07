console.log("hello");
const Models = document.getElementsByClassName("CarModel");

setInterval(function() {
    var Milliseconds = new Date().getMilliseconds();
    for (let i = 0; i < Models.length; i++) {
        const Model = Models[i];
        if (Model.hasAttribute("position")) {
            let NewValue = 1 + Math.sin(Milliseconds / 10000 * Math.PI);
            var NewPosition = "0 ".concat(NewValue, " 0");
            console.log(NewPosition)
            Model.setAttribute("position", NewPosition);
        }
    }
}, 20);