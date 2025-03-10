console.log("hello");

const CarModel1s = document.getElementsByClassName("CarModel1");
const CarModel2s = document.getElementsByClassName("CarModel2");
const TimeScale = 0.5

var DeltaTime = Date.now()
var CurrentTime = 0

setInterval(function() {
    DeltaTime = Date.now() - DeltaTime;
    CurrentTime += DeltaTime * TimeScale;
    console.log(CurrentTime)

    for (let i = 0; i < CarModel1s.length; i++) {
        const Model = CarModel1s[i];
        if (Model.hasAttribute("rotation")) {
            let NewValue = (CurrentTime % 1000) / 1000 * 360;
            var NewRotation = "".concat(NewValue, " ", NewValue, " 0");
            //console.log(NewRotation)
            Model.setAttribute("rotation", NewRotation);
        }
    }

    for (let i = 0; i < CarModel2s.length; i++) {
        const Model = CarModel2s[i];
        if (Model.hasAttribute("rotation")) {
            let NewValue = (CurrentTime % 1000) / 1000 * 360;
            var NewRotation = "".concat(NewValue, " 0 ", NewValue);
            //console.log(NewRotation)
            Model.setAttribute("rotation", NewRotation);
        }
    }
}, 20);