/*Задание 6
Числовая последовательность
 - Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.

Входные параметры: длина и значение минимального квадрата(ЗМК)
Выход: строка с рядом чисел
*/

function numberSequence(n, m) {
  let squareNum = Math.round(Math.sqrt(m));
  const resultArr = [squareNum];
  for (let i = 1; i < n; i++) {
    resultArr.push((squareNum += 1));
  }
  return resultArr.join();
}
