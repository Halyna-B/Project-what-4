/*Задание 3
Сортировка треугольников
 - Вывести треугольники в порядке убывания их площади.

Входные параметры: массив объектов треугольник
Выход: упорядоченный массив имён треугольников

Примечание:
•	Расчёт площади треугольника должен производится по формуле Герона.
•	Каждый треугольник определяется именами вершин и длинами его сторон. 
•	Приложение должно обрабатывать ввод чисел с плавающей точкой:
{ 
vertices: ‘ABC’,
a: 10,
b: 20,
c: 22.36
}
*/

function areaOfTriangles(triangles) {
    
  function formHerona(a, b, c) {
    const p = (a + b + c) / 2;
    const answer = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return Math.trunc(answer);
  }

  const areasObj = triangles.reduce((obj, el) => {
    const side = el.vertices.toLowerCase().split("");
    obj[el.vertices] = formHerona(el[side[0]], el[side[1]], el[side[2]]);
    return obj;
  }, {});

  function sortedAreas(obj) {
    const sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    return sortedArr.map((el) => el[0]);
  }

  return sortedAreas(areasObj);
}
