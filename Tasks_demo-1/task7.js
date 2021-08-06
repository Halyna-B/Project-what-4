/*Задание 7
Ряд Фибоначчи для диапазона
 - Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию ограничению: находятся в указанном диапазоне, либо имеют указанную длину.

Входные параметры: объект context с полями min и max, либо с полем length 
Выход: массив чисел
*/

function fibonacci(context) {

  try{
    
    if(typeof context !== 'object'){
      throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input argument 'context' must be an object`}
      }

    if(!context.hasOwnProperty('min','max') && !context.hasOwnProperty('length')){
      throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input argument 'context' must be an object with fields 'length' or 'min,max'`}
    }

    const isValid = (el) => {
      if(typeof el!== 'number'){
        throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input arguments of object must be a number `}
      }
      if(!Number.isInteger(el)){
        throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input arguments of object must be an integer number`}
      }
      if( el < 1 ){
        throw {status:'failed', reason: `RangeError: incorrect arguments was accept, input arguments of object must be greater than 0`}
      }
    }

      if(context.hasOwnProperty('length')){
        lengthValid = isValid(context.length);
      }

      if(context.hasOwnProperty('min','max')){
        minMaxValid = Object.values(context).forEach(el => isValid(el));
        if(context.min > context.max){
          throw {status:'failed', reason: `RangeError: incorrect arguments was accept, in object 'context' value 'max' must be greater than value 'min'`}
        }
      }

    let fibArr = [];
  
    if(context.hasOwnProperty('length')){
    countNumb = context.length;
    fibArr = [0, 1].slice(0, countNumb)
    
    while(fibArr.length < countNumb) {
    fibArr.push(fibArr.slice(-2).reduce((acc, el) => acc + el))
    }
   return fibArr
    }
  
  if(context.hasOwnProperty('min','max')){
   startNum = context.min;
   maxNumb = context.max;
  
  for(let i = 1, sum = 1; sum <= maxNumb; sum += i, i = sum - i){
    if(sum >= startNum)
    fibArr.push(sum);
  }
  return fibArr
  }
  }catch(err){
    return err
  }
}

