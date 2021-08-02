/*
Шахматная доска
Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
*  *  *  *  *  *
  *  *  *  *  *  *  
*  *  *  *  *  *
  *  *  *  *  *  *

Входные параметры: длина, ширина, символ для отображения.
Выход: строка с представлением шахматной доски
*/

function chessBoard(length, width, symb) {
  try {

    if(typeof length !== 'number'){
        throw new TypeError("Input argument 'length' must be a number")
    }

    if(typeof width !== 'number'){
        throw new TypeError("Input argument 'width' must be a number")
    }

    if(!Number.isInteger(length)){
        throw new TypeError("Input argument 'length' must be an integer number")
    }

    if(!Number.isInteger(width)){
        throw new TypeError("Input argument 'width' must be an integer number")
    }

    if( length < 0 || length >20){
        throw new Error("Input argument 'length' must be greater than 0 and less than 20 ")
    }

    if( width < 0 || width >20){
        throw new Error("Input argument 'width' must be greater than 0 and less than 20 ")
    }

    if(typeof symb !== 'string'){
        throw new TypeError("Input argument 'symbol' must be a string")
    }

    if(symb.length !== 1){
        throw new Error("Input argument 'symbol' must be a single symbol with length 1")
    }

    let board = "";
    for (let i = 0; i < length; i += 1) {
      for (let j = 0; j < width; j++) {
        board += j % 2 !== i % 2 ? " " : `${symb}`;
      }
      board += "\n";
    }
    return board;
  } catch (err) {
    return `${err.name}: ${err.message}`;
  }
}
