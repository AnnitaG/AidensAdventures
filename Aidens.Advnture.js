// board
let board;
let boardWidth = 800;
let boardHeight = 640;
let context;

// Aiden
let AidenWidth = 40;
let AidenHeight =54;
let AidenX = boardWidth/8;
let AidenY = boardHeight/2;

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

    // draw Aiden
    //context.fillStyle = "black";
    context.fillReact (Aiden.x, Aiden.y, Aiden.width, Aiden.height);

    //load images
    AidenImg = new Image();
    AidenImg.src = "./bo";
    AidenImg.onload = function () {
        context.drawImage(AidenImg, Aiden.x, Aiden.y, Aiden.width, Aiden.height);
    }

    //function (update) {
    //requestAnimationFrame(update);
    //context.clearRect(0,0, board)
    
    //}
}