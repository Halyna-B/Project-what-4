/*Задание 1
Шахматная доска
Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
*  *  *  *  *  *
  *  *  *  *  *  *  
*  *  *  *  *  *
  *  *  *  *  *  *

Входные параметры: длина, ширина, символ для отображения.
Выход: строка с представлением шахматной доски
*/

export function chessBoard(length, width, symb) {
  try {

    [length, width].forEach(argument => {
      if(typeof argument !== 'number'){
        throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input argument ${argument} must be a number`}
      }
      if(!Number.isInteger(argument)){
        throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input argument ${argument} must be an integer number`}
      }
      if( argument < 0){
        throw {status:'failed', reason: `RangeError: incorrect arguments was accept, input argument ${argument} must be greater than 0`}
      }
      if( argument > 20){
        throw {status:'failed', reason: `RangeError: incorrect arguments was accept, input argument ${argument} must be less than 20 `}
      }
     });
  
      if(typeof symb !== 'string'){
        throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input argument ${symb} must be a string`}
      }
  
      if(symb.length !== 1){
        throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input argument ${symb} must be a single symbol with length 1`}
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
    return err;
  }
}
