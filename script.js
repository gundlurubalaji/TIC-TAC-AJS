let gameBoard = [
    ["","",""],
    ["","",""],
    ["","",""]
]

let currentPlayer = 'X';
let noOfPlays = 0;
let isGameOver = false;


function playerMove(cell) {
    if(isGameOver) {

        document.getElementById('playerTurn').innerHTML = "Game over! restart game";
        return;
    }
    
    let row = cell.parentNode.rowIndex;
    console.log(row)
    
    let col = cell.cellIndex;

    
    if(gameBoard[row][col] === "") {
        gameBoard[row][col] = currentPlayer;
        cell.innerHTML = currentPlayer;
        noOfPlays++;

        if(checkWinner()) {

            document.getElementById('result').innerHTML = `Player '${currentPlayer}' won!`;
            isGameOver = true;

        } else if(checkTie()) { 

            document.getElementById('result').innerHTML = `It is a tie!`;
            isGameOver = true;

        } else { 

            if(currentPlayer === 'X') {
                currentPlayer = 'O';
                cell.style.backgroundColor = '#FEEFB3';
            }
            else {
                currentPlayer = 'X';
                cell.style.backgroundColor = '#FFBABA'
            }
            document.getElementById('playerTurn').innerHTML = `Now it is the turn of '${currentPlayer}'!`
        }
    }

}

function checkWinner() {

    for(let i = 0; i<3; i++){
        if(gameBoard[i][0] === currentPlayer 
            && gameBoard[i][1] === currentPlayer 
            && gameBoard[i][2] === currentPlayer) {
                isGameOver = true;
                return true;
            }
    }


    for(let i = 0; i<3; i++){
        if(gameBoard[0][i] === currentPlayer 
            && gameBoard[1][i] === currentPlayer 
            && gameBoard[2][i] === currentPlayer) {
                return true;
            }
    }


    if(gameBoard[0][0] === currentPlayer 
        && gameBoard[1][1] === currentPlayer 
        && gameBoard[2][2] === currentPlayer) {
            return true;
        }


    if(gameBoard[0][2] === currentPlayer 
        && gameBoard[1][1] === currentPlayer 
        && gameBoard[2][0] === currentPlayer) {
            return true;
        }

}

function checkTie() {
    if(noOfPlays == 9) {
        return true;
    }
    return false;
}

function restartGame() {
    gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    
    currentPlayer = 'X';
    document.getElementById('playerTurn').innerHTML = "It is the turn of 'X'!";
    document.getElementById('result').innerHTML = "";
    noOfPlays = 0;
    isGameOver = false;

    let cells = document.getElementsByClassName('cell');
    for(let i = 0; i<cells.length; i++){
        cells[i].innerHTML = "";
        cells[i].style.backgroundColor = '';
    }
    //another ways to write for loop
    // for(let cell of cells) {
    //     cell.innerHTML = "";
    // }

    // cells.forEach(cell => {
    //     cell.innerHTML = "";
    // })
}

