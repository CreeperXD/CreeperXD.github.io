//Canvas and context
var canvas, ctx;

window.onload = () => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", KeyDownEvent);

    //Game speed
    var speed = 10;
    setInterval(Draw, 1000 / speed);
};

//Game world
var GridSize = (TileSize = 20);
var RegisteredInput;

//Snake
var SnakeSize, SnakeTail, SnakeX, SnakeY, NextX, NextY;

//Apple
var AppleX, AppleY;

//Initialise or reset the game
function Initialise() {
    SnakeSize = 3;
    SnakeTail = [];
    SnakeX = (SnakeY = 10);
    NextX = (NextY = 0);
    
    AppleX = 15;
    AppleY = 10;

    RegisteredInput = false;
}

Initialise();

//Draw stuff on the canvas
function Draw() {
    //Move the snake
    SnakeX += NextX;
    SnakeY += NextY;

    //Teleport the snake's head to the other side of the game world
    if (SnakeX < 0) {
        SnakeX = GridSize - 1;
    } else if (SnakeX > GridSize - 1) {
        SnakeX = 0;
    } else if (SnakeY < 0) {
        SnakeY = GridSize - 1;
    } else if (SnakeY > GridSize - 1) {
        SnakeY = 0;
    }

    // //Game world have walls that kills
    // if(SnakeX < 0 || SnakeX > GridSize - 1 || SnakeY < 0 || SnakeY > GridSize - 1) {
    //     Initialise();
    // }

    //Checks if the snake ate an apple
    if(SnakeX == AppleX && SnakeY == AppleY) {
        SnakeSize++;
        console.log("Length: " + SnakeTail.length);

        function GenerateApple() {
            AppleX = Math.floor(Math.random() * GridSize);
            AppleY = Math.floor(Math.random() * GridSize);

            //Ensuring the apple does'nt spawn on top of the snake
            for(var i = 0; i < SnakeTail.length; i++) {
                if((AppleX == SnakeX && AppleY == SnakeY) || (AppleX == SnakeTail[i].x && AppleY == SnakeTail[i].y)) {
                    GenerateApple();
                }
            }
        }

        GenerateApple();
    }

    //Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Draw snake
    ctx.fillStyle = "lime";
    for(var i = 0; i < SnakeTail.length; i++) {
        ctx.fillRect(
            SnakeTail[i].x * TileSize,
            SnakeTail[i].y * TileSize,
            TileSize,
            TileSize
        );

        //Checks if the snake just run into its tail
        if(SnakeTail[i].x == SnakeX && SnakeTail[i].y == SnakeY) {
            Initialise();
        }
    }

    //Draw apple
    ctx.fillStyle = "red";
    ctx.fillRect(AppleX * TileSize + 5, AppleY * TileSize + 5, TileSize - 10, TileSize - 10);

    //Responsible for the behaviour of tail
    SnakeTail.push({ x: SnakeX, y: SnakeY });
    if(SnakeTail.length > SnakeSize) {
        SnakeTail.shift();
    }

    RegisteredInput = false;
}

//Inputs for movement
function KeyDownEvent(e) {
    if(!RegisteredInput) {
        switch(e.keyCode) {
            case 37:
                if(NextX == 0) {
                    NextX = -1;
                    NextY = 0;
                }
                break;
            case 38:
                if(NextY == 0) {
                    NextX = 0;
                    NextY = -1;
                }
                break;
            case 39:
                if(NextX == 0) {
                    NextX = 1;
                    NextY = 0;
                }
                break;
            case 40:
                if(NextY == 0) {
                    NextX = 0;
                    NextY = 1;
                }
                break;
        }
        RegisteredInput = true;
    }
}