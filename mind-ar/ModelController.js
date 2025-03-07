console.log("hello");
const Models = document.getElementsByClassName("CarModel");

setInterval(function() {
    var Milliseconds = new Date().getMilliseconds();
    for (let i = 0; i < Models.length; i++) {
        const Model = Models[i];
        if (Model.hasAttribute("position")) {
            let NewValue = 1 + Math.sin(Milliseconds / 1000 * Math.PI) / 10;
            var NewPosition = "0 0 ".concat(NewValue);
            console.log(NewPosition)
            Model.setAttribute("position", NewPosition);
        }
    }
}, 20);