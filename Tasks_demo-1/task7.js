/*Задание 7
Ряд Фибоначчи для диапазона
 - Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию ограничению: находятся в указанном диапазоне, либо имеют указанную длину.

Входные параметры: объект context с полями min и max, либо с полем length 
Выход: массив чисел
*/

function Fibonacci(context) {
  if (context.hasOwnProperty("length")) countNumb = context.length;
  const fibArr = [0, 1].slice(0, countNumb);

  while (fibArr.length < countNumb) {
    fibArr.push(fibArr.slice(-2).reduce((acc, el) => acc + el));
  }

  return fibArr;
}
