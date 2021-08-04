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

try{

  if(!Array.isArray(triangles)){
    throw new Error(`{status:'failed', reason:'TypeError: incorrect arguments was accept, function areaOfTriangles should accepts an array with objects'}`)
  }

  triangles.forEach(el => {
     keys = Object.keys(el);
     val  = Object.values(el);
     firstSide = val[1];
     secondSide = val[2];
     thirdSide = val[3];
     nameTriangle = keys[1]+keys[2]+keys[3];
    if(nameTriangle !== val[0].toLowerCase()){
      throw new Error(`{status:'failed', reason:TypeError: incorrect arguments was accept, the vertices of the triangle must match the side names}`)
    }
    if(firstSide + secondSide < thirdSide || firstSide + thirdSide < secondSide || secondSide + thirdSide < firstSide){
      throw new Error(`{status:'failed', reason:TypeError: incorrect arguments was accept, one of the objects is not a triangle}`)
    }
    if(firstSide < 0 || secondSide < 0 || thirdSide < 0){
      throw new Error(`{status:'failed', reason:TypeError: the sides of the triangle must be positive numbers}`)
    }
    if(typeof firstSide !== 'number' ||typeof secondSide !== 'number' || typeof thirdSide !== 'number'){
      throw new Error(`{status:'failed', reason:TypeError: the sides of the triangle must be numbers}`)
    }
  
  })

    
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

}catch(err){
  return `${err.name}: ${err.message}`
}
}
