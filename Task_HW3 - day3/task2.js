/*
Task 2: Tic-Tac-Toe Checker

Assume that the board comes in the form of a 3x3 array, where the value:
 is 0 if a spot is empty,
    1 if it is an "X",
 or 2 if it is an "O", 
 like so:
[[0, 0, 1],

 [0, 1, 2],

 [2, 1, 0]]

We want our function to return:

1 if "X" won,
2 if "O" won,
-1 if the board is not yet finished (there are empty spots),
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

*/


function ticTacToe(arr){

    //if the board is not yet finished
        for (let subarr of arr){
          if(subarr.includes(0)) return -1;
        }
    function horizont(arg, value){
      return arg.some(horizontStr => horizontStr.every(numb => numb === value))
    }
    
    function vertical(arg, value){
     return arg.every(board => board[0]===value||board[1]===value||board[2]===value)
    }
    
    function diagonal(arg, value){
      return arg.every((subarr, index) => subarr[index]===value)
    }
    
    function reverseArray(arg){
      return arg.map(subarr => subarr.reverse())
    }
        
        //for Win "X"
        const firstDiagonal_1 = diagonal(arr, 1);
        const secondDiagonal_1 = diagonal(reverseArray(arr, 1));
        const horizontalWin_1 = horizont(arr, 1);
        const verticalWin_1 = vertical(arr, 1);
    
        //for Win "O"
        const firstDiagonal_2 = diagonal(arr, 2);
        const secondDiagonal_2 = diagonal(reverseArray(arr, 2));
        const horizontalWin_2 = horizont(arr, 2);
        const verticalWin_2 = vertical(arr, 2);
    
        if(firstDiagonal_1||secondDiagonal_1||horizontalWin_1||verticalWin_1){
          return 1;
        }else 
        if(firstDiagonal_2||secondDiagonal_2||horizontalWin_2||verticalWin_2){
          return 2;
        }else{
          return 0;
        }
           
    }