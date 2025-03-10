console.log("hello");

const CarModel1s = document.getElementsByClassName("CarModel1");
const CarModel2s = document.getElementsByClassName("CarModel2");
const TimeScale = 0.5

var LastUpdatedSeconds = MillisecondsToSeconds(Date.now())
var DeltaSeconds = 0
var CurrentTime = 0

setInterval(UpdateTime, 0);

setInterval(function() {
    for (let i = 0; i < CarModel1s.length; i++) {
        const Model = CarModel1s[i];
        if (Model.hasAttribute("rotation")) {
            let NewValue = GetFractionalPart(CurrentTime / 1000) * 360;
            let NewRotation = "".concat(NewValue, " ", NewValue, " 0");
            //console.log(NewRotation)
            Model.setAttribute("rotation", NewRotation);
        }
    }

    for (let i = 0; i < CarModel2s.length; i++) {
        const Model = CarModel2s[i];
        if (Model.hasAttribute("rotation")) {
            let NewValue = GetFractionalPart(CurrentTime / 1000) * 360;
            let NewRotation = "".concat(NewValue, " 0 ", NewValue);
            //console.log(NewRotation)
            Model.setAttribute("rotation", NewRotation);
        }
    }
}, 0);

function UpdateTime() {
    let CurrentSeconds = MillisecondsToSeconds(Date.now());
    DeltaSeconds = CurrentSeconds - LastUpdatedSeconds;
    LastUpdatedSeconds = CurrentSeconds;
    CurrentTime += DeltaSeconds * TimeScale;
    console.log(CurrentTime);
}

function MillisecondsToSeconds(Milliseconds) {
    return Milliseconds / 1000;
}

function GetFractionalPart(Number) {
    return Number % 1;
}