console.log("hello");
const Models = document.getElementsByClassName("Model");

setInterval(function() {
    console.log(Models.length);
    var Milliseconds = new Date().getMilliseconds();
    //Models.forEach(UpdateRotation);
    for (let i = 0; i < Models.length; i++) {
        const Model = Models[i];
        if (Model.hasAttribute("rotation")) {
            let NewValue = Math.sin(Milliseconds / 500 * Math.PI);
            var NewRotation = "90 ".concat(NewValue, " 0");
            Model.setAttribute("rotation", NewRotation);
        }
    }
}, 20);
//test

// function UpdateRotation(Model) {
//     var Milliseconds = new Date().getMilliseconds();
//     if (Model.hasAttribute("rotation")) {
//         let NewValue = Math.sin(Milliseconds / 500 * Math.PI)
//         var NewRotation = "90 ".concat(NewValue, " 0");
//         Model.setAttribute("rotation", NewRotation);
//     }
// }