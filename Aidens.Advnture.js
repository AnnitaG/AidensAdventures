// board
let board;
let boardWidth = 800;
let boardHeight = 640;
let context;

// Aiden
let AidenWidth = 250;
let AidenHeight =250;
let AidenX = boardWidth/40;
let AidenY = boardHeight/2;
let AidenImg;

let Aiden = {
    x : AidenX,
    y : AidenY,
    width : AidenWidth,
    height : AidenHeight
}

//monster
let monsterArray = [];
let monsterWidth = 150;
let monsterHeight = 150;
let monsterX = boardWidth;
let monsterY = AidenY/1;
let monsterImg;

//physics
let velocityX = -2; //monsters moving left speed

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // used to draw on board

    // draw Aiden
    //context.fillStyle = "black";
    //context.fillReact (Aiden.x, Aiden.y, Aiden.width, Aiden.height);

    //load images
    AidenImg = new Image();
    AidenImg.src = "./bohater.png";
    AidenImg.onload = function () {
        context.drawImage(AidenImg, Aiden.x, Aiden.y, Aiden.width, Aiden.height);
    }

    monsterImg = new Image();
    monsterImg.src = "./monster.png"

    requestAnimationFrame(update);
    setInterval(placeMonsters, 3500); //every 2.5 seconds
}
function update() {
    requestAnimationFrame(update);
    context.clearRect(0,0,  board.width, board.height);

    //Aiden
    context.drawImage(AidenImg,Aiden.x, Aiden.y, Aiden.width, Aiden.height);

    //monster
    for (let i = 0; i < monsterArray.length; i++) {
        let monster = monsterArray[i];
        monster.x += velocityX;
        context.drawImage(monster.img, monster.x, monster.y, monster.width, monster.height);
    }
    }

function placeMonsters() {
    let monster = {
        img : monsterImg,
        x : monsterX,
        y : monsterY,
        width : monsterWidth,
        height : monsterHeight,
        passed : false
    }
    monsterArray.push(monster);
}



