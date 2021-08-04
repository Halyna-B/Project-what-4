/*Задание 6
Числовая последовательность
 - Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.

Входные параметры: длина и значение минимального квадрата(ЗМК)
Выход: строка с рядом чисел
*/

function numberSequence(n, m) {
  
  try{
      if(typeof n!== 'number' || typeof m!== 'number'){
        throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input arguments must be numbers`}
      }
      if(!Number.isInteger(n)){
        throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input argument ${n} must be an integer number`}
      }
      if( n <= 0 || m <= 0){
        throw {status:'failed', reason: `RangeError: incorrect arguments was accept, input arguments must be greater than 0`}
      }

  let squareNum = Math.round(Math.sqrt(m));
  const resultArr = [squareNum];
  for (let i = 1; i < n; i++) {
    resultArr.push((squareNum += 1));
  }
  return resultArr.join();
}catch(err){
  return `${err.status}, ${err.reason}`
}
}


