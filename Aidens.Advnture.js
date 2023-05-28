
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

var isJumping = false;
var isCrouching = false;
var isMovingLeft = false;
var isMovingRight = false;
var moveSpeed = 5;
var crouchHeight = 50;

function movePlayer() {{
    if (isJumping && AidenY >= groundY) {
      AidenY -= jumpForce;
      isJumping = false;
    }
      
    }
    
    if (isCrouching) {
      AidenY.style.height = crouchHeight + "px";
    } else {
      AidenY.style.height = "50px";
    }
  
    if (isMovingLeft) {
      AidenX -= moveSpeed; 
    }
  
    if (isMovingRight) {
      AidenX += moveSpeed;
    }
  // updated player position
  
    AidenY.style.left = AidenX + "px";
    AidenX.style.left = AidenY + "px";
  }
  
  
  document.addEventListener("keydown", function(event) {
    switch(event.key) {
      case "w":
        isJumping = true;
        break;
      case "s":
        isCrouching = true;
        break;
      case "a":
        isMovingLeft = true;
        break;
      case "d":
        isMovingRight = true;
        break;
    }
  });
  
  
  document.addEventListener("keyup", function(event) {
    switch(event.key) {
      case "w":
        isJumping = false;
        break;
      case "s":
        isCrouching = false;
        break;
      case "a":
        isMovingLeft = false;
        break;
      case "d":
        isMovingRight = false;
        break;
    }
});

function gameLoop() {
{
    
    movePlayer();
    
    requestAnimationFrame(gameLoop);
  }
  
}
gameLoop();
playBackgroundMusic();  
