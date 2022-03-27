var player = null;
const MAX_ROWS         = 3;
const MAX_CELLS_ROW    = 3;
const MAX_CELLS_TABLE  = 9;
const MAX_COLUMNS      = 3;

changePlayer('X');

function cellSelected(id)
{
     var cellPicked = document.getElementById(id);

     if ((cellPicked.innerHTML === 'X') ||
         (cellPicked.innerHTML === 'O')){
           return;
       }

     cellPicked.innerHTML = player;     
     cellPicked.style.color = '#000';

     hasWinner(player);

     if (player ==='X') {
        changePlayer('O');
     } else {
        changePlayer('X');
     }          
}

function changePlayer(valor)
{
    player = valor;
    let selectedPlayer = document.getElementById('selectedPlayer');    
    selectedPlayer.innerHTML = player;
}

function hasWinnerInRow(player, row)
{
    let gameTable = document.getElementsByClassName("cell");
    
    let winner = "";
    let indexCell = row*MAX_COLUMNS;
    let limit = indexCell + 3;
        
    for (indexCell; indexCell < limit; indexCell++){
         
        if (player === gameTable[indexCell].innerHTML){
            
            winner = player;
        } else {
            
            winner = "";             
            break;   
        }                      
    }    

    return winner;
}

function hasWinnerInColumns(column,player)
{
    let gameTable = document.getElementsByClassName("cell");

    let winner    = "";
    let indexCell = column;
    let limit     = indexCell + (MAX_COLUMNS*2);

    for (indexCell; indexCell <= limit; indexCell = indexCell+MAX_COLUMNS){

        if (player === gameTable[indexCell].innerHTML){

            winner = player;
        } else {

            winner = "";             
            break;   
        }
    }

    return winner;
}

function hasWinnerInMainDiagonal(player)
{
    let gameTable = document.getElementsByClassName("cell");
    
    let winner = "";
        
    for (let indexElement = 0; indexElement < MAX_COLUMNS; indexElement++)
    {
        if (player === gameTable[indexElement*(MAX_COLUMNS+1)].innerHTML)
        {
            winner = player;            
        } else {
            return "";
        }
    }   

    return winner;
}

function hasWinnerInSecundaryDiagonal(player)
{
    let gameTable = document.getElementsByClassName("cell");
    
    let winner = "";
        
    for (let indexElement = 1; indexElement <= MAX_COLUMNS ;indexElement++)
    {      
        if (player === gameTable[indexElement*(MAX_COLUMNS-1)].innerHTML)
        {
            winner = player;             
        } else {
            return "";  
        }
    }
     
    return winner;
}

function hasWinner(player)
{
    let winner = "";        
    
    for (let indexRow = 0; indexRow < MAX_ROWS; indexRow++ )
    {        
       winner = hasWinnerInRow(player, indexRow);

       if (winner != "" ) {
          changeColorWinnerRow(indexRow);
          break;
       }
    }
    
    if (winner === ""){
     
       for (let indexcolum = 0; indexcolum < MAX_COLUMNS; indexcolum++)
       {        
          winner = hasWinnerInColumns(indexcolum,player);

         if (winner !== "" ) {
            changeColorWinnercolumn(indexcolum);
            break;
         }
      }    
    }    

    if (winner === ""){
        
        winner = hasWinnerInMainDiagonal(player);

        if (winner !== "" ) {
            changeColorWinnerMainDiagonal();
        }
    }

    if (winner === ""){
        
        winner = hasWinnerInSecundaryDiagonal(player);

        if (winner !== "" ) {
            changeColorWinnerSecundaryDiagonal();
        }
    }    

    if ( winner !== ""){
        document.getElementById("playerWinner").innerHTML = `Jogador Vencedor: ${winner}`;
        document.getElementById("gameTable").classList.add("disabled");
     }    
}

function changeColorWinnerRow(row)
{ 
    let cell1 = document.getElementById('cell1');   
    let cell2 = document.getElementById('cell2');
    let cell3 = document.getElementById('cell3');
    let cell4 = document.getElementById('cell4');
    let cell5 = document.getElementById('cell5');
    let cell6 = document.getElementById('cell6');
    let cell7 = document.getElementById('cell7');
    let cell8 = document.getElementById('cell8');
    let cell9 = document.getElementById('cell9');
    
    if (row === 0) {

        cell1.classList.add("Winner");
        cell2.classList.add("Winner");
        cell3.classList.add("Winner");
     }

     if (row === 1) {

        cell4.classList.add("Winner");
        cell5.classList.add("Winner");
        cell6.classList.add("Winner");
     }     

     if (row === 2) {

        cell7.classList.add("Winner");
        cell8.classList.add("Winner");
        cell9.classList.add("Winner");
     }        
}

function changeColorWinnercolumn(column)
{ 
    
    let cell1 = document.getElementById('cell1');   
    let cell2 = document.getElementById('cell2');
    let cell3 = document.getElementById('cell3');
    let cell4 = document.getElementById('cell4');
    let cell5 = document.getElementById('cell5');
    let cell6 = document.getElementById('cell6');
    let cell7 = document.getElementById('cell7');
    let cell8 = document.getElementById('cell8');
    let cell9 = document.getElementById('cell9');
        
    if (column === 0) {

        cell1.classList.add("Winner");
        cell4.classList.add("Winner");
        cell7.classList.add("Winner");
      }
 
      if (column === 1) {
 
        cell2.classList.add("Winner");
        cell5.classList.add("Winner");
        cell8.classList.add("Winner");
      }     
 
      if (column === 2) {
 
         cell3.classList.add("Winner");
         cell6.classList.add("Winner");
         cell9.classList.add("Winner");
      }   
}

function changeColorWinnerMainDiagonal()
{

    document.getElementById('cell1').classList.add("Winner");
    document.getElementById('cell5').classList.add("Winner");
    document.getElementById('cell9').classList.add("Winner");  
}

function changeColorWinnerSecundaryDiagonal()
{
    document.getElementById('cell3').classList.add("Winner");
    document.getElementById('cell5').classList.add("Winner");
    document.getElementById('cell7').classList.add("Winner");  
}

function restart()
{
    changePlayer('X');
    let playerWinner = document.getElementById('playerWinner');
    playerWinner.innerHTML = '';

    let gameTableCells =  document.getElementsByClassName("cell");

    for (let indexCell = 0; indexCell <= MAX_CELLS_TABLE; indexCell++){

        
        gameTableCells[indexCell].innerHTML = "_";       
        gameTableCells[indexCell].classList.remove("Winner");
        gameTableCells[indexCell].style.color = '#eee';
        document.getElementById("gameTable").classList.remove("disabled");
    }   
}



