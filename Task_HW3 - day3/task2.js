/*
Task 2: Tic-Tac-Toe Checker

Assume that the board comes in the form of a 3x3 array, where the values:
    0 if a spot is empty,
    1 if it is an "X",
    2 if it is an "O",
We want our function to return:
    1 if "X" won,
    2 if "O" won,
   -1 if the board is not yet finished (there are empty spots),
    0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

*/

function ticTacToe(arr){
  try{

  function horizont(arg, value){
    return arg.some(horizontStr => horizontStr.every(numb => numb === value))
    }
  
  function vertical(arg, value){
    return arg.some((line,index) => arg.every(el => el[index] === value))
  }
  
  function diagonal(arg, value) {
    return arg.every((subarr, index) => subarr[index]===value||
           arg.every((subarr, index) => subarr[3-1 - index]===value))
  }
  
  function emptySpot(arg){
   return arg.some(subarr => subarr.some(el => el === 0))
  }
   
      //for Win "X"
      const horizontalWin_1 = horizont(arr, 1);
      const verticalWin_1 = vertical(arr, 1);
      const diagonal_1 = diagonal(arr, 1);
  
      //for Win "O"
       const horizontalWin_2 = horizont(arr, 2);
       const verticalWin_2 = vertical(arr, 2);
       const diagonal_2 = diagonal(arr, 2);
  
      //if the board is not yet finished
      const notFinish = emptySpot(arr)
     
  
      if(diagonal_1||horizontalWin_1||verticalWin_1)
        return 1;
       
      if(diagonal_2||horizontalWin_2||verticalWin_2)
        return 2;
  
      if(notFinish)
        return -1
    
        return 0;
         
  } catch(e) {
    return `${e.name}: ${e.message}`
  }

}