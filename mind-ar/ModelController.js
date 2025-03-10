console.log("hello");
const CarModel1s = document.getElementsByClassName("CarModel1");
const CarModel2s = document.getElementsByClassName("CarModel2");

setInterval(function() {
    var Milliseconds = new Date().getMilliseconds();
    for (let i = 0; i < CarModel1s.length; i++) {
        const Model = CarModel1s[i];
        if (Model.hasAttribute("position")) {
            let NewValue = 0.5 + Math.sin(Milliseconds / 1000 * Math.PI) / 10;
            var NewPosition = "0 ".concat(NewValue, " 0");
            console.log(NewPosition)
            Model.setAttribute("position", NewPosition);
        }
    }
    for (let i = 0; i < CarModel2s.length; i++) {
        const Model = CarModel2s[i];
        if (Model.hasAttribute("position")) {
            let NewValue = 0.5 + Math.sin(Milliseconds / 1000 * Math.PI) / 10;
            var NewPosition = "0 0 ".concat(NewValue);
            console.log(NewPosition)
            Model.setAttribute("position", NewPosition);
        }
    }
}, 20);