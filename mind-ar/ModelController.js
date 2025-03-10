console.log("hello");

const CarModel1 = document.getElementsById("CarModel1");
const CarModel2 = document.getElementsById("CarModel2");
const CarModel3 = document.getElementsById("CarModel3");
const CarModel4 = document.getElementsById("CarModel4");
const CarModel5 = document.getElementsById("CarModel5");
const CarModel6 = document.getElementsById("CarModel6");
const CarModel7 = document.getElementsById("CarModel7");
const CarModel8 = document.getElementsById("CarModel8");
const CarModel9 = document.getElementsById("CarModel9");
const CarModel10 = document.getElementsById("CarModel10");

const TimeScale = 1

var LastUpdatedSeconds = MillisecondsToSeconds(Date.now())
var DeltaSeconds = 0
var CurrentTime = 0

setInterval(UpdateTime, 0);

setInterval(function() {
    let NewValue = GetFractionalPart(CurrentTime) * 360;
    if (CarModel1.hasAttribute("rotation")) {
        let NewRotation = "0 ".concat(NewValue, " 0");
        console.log(NewRotation);
        CarModel1.setAttribute("rotation", NewRotation);
    }
    if (CarModel2.hasAttribute("rotation")) {
        let NewRotation = "45 ".concat(NewValue, " 0");
        console.log(NewRotation);
        CarModel2.setAttribute("rotation", NewRotation);
    }
    if (CarModel3.hasAttribute("rotation")) {
        let NewRotation = "90 ".concat(NewValue, " 0");
        console.log(NewRotation);
        CarModel3.setAttribute("rotation", NewRotation);
    }
    if (CarModel4.hasAttribute("rotation")) {
        let NewRotation = "135 ".concat(NewValue, " 0");
        console.log(NewRotation);
        CarModel4.setAttribute("rotation", NewRotation);
    }
    if (CarModel5.hasAttribute("rotation")) {
        let NewRotation = "180 ".concat(NewValue, " 0");
        console.log(NewRotation);
        CarModel5.setAttribute("rotation", NewRotation);
    }
    if (CarModel6.hasAttribute("rotation")) {
        let NewRotation = "0 0 ".concat(NewValue);
        console.log(NewRotation);
        CarModel6.setAttribute("rotation", NewRotation);
    }
    if (CarModel7.hasAttribute("rotation")) {
        let NewRotation = "45 0 ".concat(NewValue);
        console.log(NewRotation);
        CarModel7.setAttribute("rotation", NewRotation);
    }
    if (CarModel8.hasAttribute("rotation")) {
        let NewRotation = "90 0 ".concat(NewValue);
        console.log(NewRotation);
        CarModel8.setAttribute("rotation", NewRotation);
    }
    if (CarModel9.hasAttribute("rotation")) {
        let NewRotation = "135 0 ".concat(NewValue);
        console.log(NewRotation);
        CarModel9.setAttribute("rotation", NewRotation);
    }
    if (CarModel10.hasAttribute("rotation")) {
        let NewRotation = "180 0 ".concat(NewValue);
        console.log(NewRotation);
        CarModel10.setAttribute("rotation", NewRotation);
    }
}, 0);

function UpdateTime() {
    let CurrentSeconds = MillisecondsToSeconds(Date.now());
    DeltaSeconds = CurrentSeconds - LastUpdatedSeconds;
    LastUpdatedSeconds = CurrentSeconds;
    CurrentTime += DeltaSeconds * TimeScale;
    //console.log(CurrentTime);
}

function MillisecondsToSeconds(Milliseconds) {
    return Milliseconds / 1000;
}

function GetFractionalPart(Number) {
    return Number % 1;
}