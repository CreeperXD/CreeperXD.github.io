const Date = new Date();
print("hello")
let Models = document.getElementsByClassName("Model");

Models.forEach(Model => {
    if (Model.hasAttribute("rotation")) {
        let NewValue = Date.getMilliseconds();
        var NewRotation = "90 ".concat(NewValue, " 0");
        Model.setAttribute("rotation", NewRotation);
    }
});