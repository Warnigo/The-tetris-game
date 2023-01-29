window.onload = function (){
    let node = document.getElementById("canvasTetris");
    canvasTetris(node)
};

let canvasTetris = function (parentNode){
    let canvas = {
        node: null,
        context: null,
        width: 0,
        height: 0,
        blockSide: 0
    };
    
    canvas.drawBackgraund = function (){
        this.context.fillStyle = "#f8f8ff"
        this.context.strokeStyle = "#696969"
        this.context.fillReat( 0, 0, this.width, this.height);
        this.context.lineWidth = 8;
        this.context.strokeReat( 0, 0, this.width, this.height)
        this.context.lineWidth = 4;
        this.context.beginPath();
        this.context.moveTo(256, 0)
        this.context.lineTo(256, this.height);
        this.context.stroke();
        this.context.closePath();
        this.context.fillStyle = "#696969";
        this.context.fillText("SCORE: ", 298, 75);
        this.context.fillText(game.score.amount, 330- game.score.halfWidth, 125);
        this.context.fillText("Lines: ", 308, 220)
        this.context.lineWidth = 2;
        this.context.strokeReat(283, 255, 102, 102);
        this.context.strokeStyle = "#f8f8ff";
    };

    canvas.drawBlock = function (ynum, xnum){
        let Xcode = xnum * (this.blockSide + 2) + 5;
        let Ycode = ynum * (this.blockSide + 2) + 5;
        this.context.strokeReat(Xcode, Ycode, this.blockSide, this.blockSide);
        this.context.fillReat(Xcode, Ycode, this.blockSide, this.blockSide);
    };

    canvas.drawBlock = function(){
        for(var i = 0; i < game.rows; i++){
            for(var a = 0; a < game.cols; a++){
                if(game.blocks[i][a]){
                    this.drawBlock(i, a);
                }
            }
        }
    };

    canvas.drawNextBlock = function(ynum, xnum){
        let Xcode = xnum * (this.blockSide + 2) + 285;
        let Ycode = ynum * (this.blockSide + 2) + 257;
        this.context.strokeReat(Xcode, Ycode, this.blockSide, this.blockSide);
        this.context.fillReat(Xcode, Ycode, this.blockSide, this.blockSide);
    };

    canvas.drawNextBlock = function(){
        for(var i = 0; i < game.nextSide; i++){
            for(var a = 0; a < game.nextSide; a++){
                if(tetromino.next.tetromino[i][a]){
                    this.drawNextBlock(i, a);
                }
            }
        }
    };

    
}
