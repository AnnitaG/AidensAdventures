
var isJumping = false;
var isCrouching = false;
var isMovingLeft = false;
var isMovingRight = false;
var playerY = 0;
var playerX = 0; 
var moveSpeed = 5;
var crouchHeight = 50;

// board
let board;
let boardWidth = 800;
let boardHeight = 640;
let context;

// Aiden
//let AidenWidth = 40;
//let AidenHeight =54;
//let AidenX = boardWidth/8;
//let AidenY = boardHeight/2;

let Aiden = {
    x : AidenX,
    y : AidenY,
    width : AidenWidth,
    height : AidenHeight

}
window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // used to draw on board

    // draw Aid

function movePlayer() {
  if (isJumping && playerY >= groundY) {
    playerY -= jumpForce;
    isJumping = false;
  }
	
  }
}
  if (isCrouching) {
    playerElement.style.height = crouchHeight + "px";
  }else{
    playerElement.style.height = "50px";
  }

  if (isMovingLeft) {
	playerX -= moveSpeed; 
  }

  if (isMovingRight) {
	playerX += moveSpeed;
  }
// updated player position

  playerElement.style.left = playerX + "px";
  playerElement.style.left = playerY + "px";
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

var playerElement = document.createElement("div");
playerElement.style.AidenWidth = "40px";
playerElement.style.AidenHeight = "54px";
playerElement.style.AidenX = " boardWidth/8";
playerElement.style.AidenY = "boardHeight/2";

var gamContaier = document.getElementById("board")
gameContainer.appendChild("player")

function gameLoop() {
  
  movePlayer();
  
  requestAnimationFrame(gameLoop);
}


gameLoop();