var game = function (){
    let gameOver = false;
    let counter = 1;
    let winner;

var isEqual = function(arr){
    return arr.reduce(function(a,b){
        if(a === ' '){
            return false;
        }else{
            winner = arr[0];
            return (a===b) ? a : false;
        }
    }) === arr[0]

}
var findWinner = function(){
    if(
        isEqual([placement[0],placement[1],placement[2]])||
        isEqual([placement[3],placement[4],placement[5]])||
        isEqual([placement[6],placement[7],placement[8]])||
        isEqual([placement[0],placement[3],placement[6]])||
        isEqual([placement[1],placement[4],placement[7]])||
        isEqual([placement[2],placement[5],placement[8]])||
        isEqual([placement[0],placement[4],placement[8]])||
        isEqual([placement[2],placement[4],placement[6]])
    ){
        return true;
    }
}
var testInput = function (place,value){
    if(place > 8){
        console.log("Enter number between 0-8");
        return;
    }else if(placement[place] !== ' '){
        console.log("Spot is taken")
        return;
    }
    if(value === 'x'){
        placement[place] = value;
        if(placement[place]!== ' '){
            counter ++;
        }
        
    }else if(value === 'o'){
        placement[place] = value;
        if(placement[place]!== ' '){
            counter ++;
        }
    }else{
        console.log("Enter x or o");
    }
}

var randomNumbers = function(max){

    return Math.floor(Math.random() * Math.floor(max));
}
    return {
        drawBoard : function(firstRun) {
            // Demonstrate position #s to user
            if (firstRun) {
                placement = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
            }
            console.log(placement);
            
        },
        turn: function(place){
            let value = "x"
            if(gameOver === true){
                console.log("Game Over");
                return;
            }
            testInput(place,value);
            if (findWinner()){
                this.drawBoard();
                console.log("Game Over")
                gameOver === true;
            }else if(counter>9){
                console.log("No more steps")
            }
        },
        compTurn: function (){
            let value = "o";
            place = randomNumbers(8);
            if(gameOver === true){
                console.log("Game Over o won");
                return;
            }
            testInput(place,value);
            if (findWinner()){
                this.drawBoard();
                console.log("Game Over x won")
                gameOver === true;
            }else if(counter>9){
                console.log("No more steps")
            }
        }

    }
}
game();
var TicTacToy = game();
TicTacToy.drawBoard(true);