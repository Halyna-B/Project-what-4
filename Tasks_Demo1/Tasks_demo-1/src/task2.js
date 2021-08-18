/*Задание 2
Анализ конвертов
 - Есть два конверта со сторонами (a,b) и (c,d). Требуется определить, можно ли один конверт вложить в другой.
Программа должна обрабатывать ввод чисел с плавающей точкой. 

Входные параметры: объекты конверт1 и конверт2 
Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.

*/

export function attachEnvelope(env1, env2) {
  try{
    if(typeof env1 !== 'object' || typeof env2 !== 'object'){
      throw {status:'failed', reason: `TypeError: incorrect arguments was accept, function attachEnvelope should accepts two objects`}
  }

    const validEnv = (env) => {
      Object.values(env).forEach(el => {
      if(typeof el !== 'number'){
        throw {status:'failed', reason: `TypeError: incorrect data type was accept, arguments of objects should be numbers`}
      }
      if(Number.isInteger(el)){
        throw {status:'failed', reason: `TypeError: incorrect arguments was accept, arguments of objects should be float numbers`}
      }
      if(el < 0){
        throw {status:'failed', reason: `RangeError: incorrect numbers was accept, arguments of objects should be > 0`}
      }
      if(el > 1000000){
        throw {status:'failed', reason: `RangeError: incorrect numbers was accept, arguments of objects should be < 1000000`}
      }
    })
  }

  env1Valid = validEnv(env1);
  env2Valid = validEnv(env2);

  
  const valuesEnv1 = Object.values(env1);
  const valuesEnv2 = Object.values(env2);

  function getMin(arr) {
    return Math.min(...arr);
  }

  function getMax(arr) {
    return Math.max(...arr);
  }

  const minSideEnv1 = getMin(valuesEnv1);
  const maxSideEnv1 = getMax(valuesEnv1);
  const minSideEnv2 = getMin(valuesEnv2);
  const maxSideEnv2 = getMax(valuesEnv2);

  function isLonger(val1, val2) {
    return val1 > val2 ? true : false;
  }

  if (
    isLonger(maxSideEnv1, maxSideEnv2) &&
    isLonger(minSideEnv1, minSideEnv2)
  ) {
    return 1;
  } else if (
    isLonger(maxSideEnv2, maxSideEnv1) &&
    isLonger(minSideEnv2, minSideEnv1)
  ) {
    return 2;
  } else {
    return 0;
  }
}catch(err){
return err
}
}

