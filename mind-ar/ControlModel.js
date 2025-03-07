console.log("hello");
const Models = document.getElementsByClassName("Model");

setInterval(function() {
    var Milliseconds = new Date().getMilliseconds();
    console.log(Models.length)
    //Models.forEach(UpdateRotation);
    for (let i = 0; i < Models.length; i++) {
        const Model = Models[i];
        if (Model.hasAttribute("rotation")) {
            let NewValue = Math.sin(Milliseconds / 500 * Math.PI * 180);
            var NewRotation = "90 ".concat(NewValue, " 0");
            console.log(NewRotation);
            Model.setAttribute("rotation", NewRotation);
        }
    }
}, 20);

setInterval(function() {
    var Seconds = new Date().getSeconds();
    console.log(Seconds)
}, 1000);

// function UpdateRotation(Model) {
//     var Milliseconds = new Date().getMilliseconds();
//     if (Model.hasAttribute("rotation")) {
//         let NewValue = Math.sin(Milliseconds / 500 * Math.PI)
//         var NewRotation = "90 ".concat(NewValue, " 0");
//         Model.setAttribute("rotation", NewRotation);
//     }
// }