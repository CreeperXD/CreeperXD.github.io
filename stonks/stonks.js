/*
    Verifies that the script is running
*/

console.log("Script 'stonks.js' loaded.");
setTimeout(
    function() {
        console.log("First second passed.");
    }
    , 1000
);


/*
    Updates on stonks
*/

//CreeperXD
setTimeout(
    function() {
        document.getElementById("CXD arrow").src = "yellow equal.png";
        document.getElementById("CXD growth").style.color = "yellow";
        document.getElementById("CXD growth").innerHTML = "0.00";
    }
    , 1000
);

//Meme Man
setTimeout(
    function() {
        StockUpdate(.0042, 9000, "MM arrow", "MM growth", "MM score");
    }
    , 1000
);

//Wojak
setTimeout(
    function() {
        StockUpdate(-.001, 2010, "Wojak arrow", "Wojak growth", "Wojak score");
    }
    , 1000
);


/*
    Function for a random integer between 2 integers.
    Credit: w3schools.com
*/

function RandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*
    Function to update stonks that can be reused.
    Growth and Score are numbers, StockArrow, StockGrowth, StockScore are strings
*/

function StockUpdate(Growth, Score, StockArrow, StockGrowth, StockScore) {
    //Displays growth
    document.getElementById(StockGrowth).innerHTML = (Growth * 100).toFixed(2);
    //Displays signs that indicates the performance of a stonk
    if(Growth > 0) {
        document.getElementById(StockArrow).src = "green arrow.png";
        document.getElementById(StockGrowth).style.color = "green";
    } else if(Growth < 0) {
        document.getElementById(StockArrow).src = "red arrow.png";
        document.getElementById(StockGrowth).style.color = "red";
    } else {
        document.getElementById(StockArrow).src = "yellow equal.png";
        document.getElementById(StockGrowth).style.color = "yellow";
    }
    //Calculate a new score and display it with no decimal places
    Score += Score * Growth;
    document.getElementById(StockScore).innerHTML = Score.toFixed(0);
    //Generate a new growth
    Growth = RandomInteger(-100, 100) / 10000;
    //Make the function repeats itself every second
    setTimeout(
        function() {
            StockUpdate(Growth, Score, StockArrow, StockGrowth, StockScore);
        }
        , 1000
    );
}