/*Задание 4
Палиндром
 - Проверить является ли число или его часть палиндромом. Например, число 1234437 не является палиндромом, но является палиндромом его часть 3443. Числа меньшие, чем 10 палиндромом не считать.

Входные параметры: число
Выход: извлеченный из числа палиндром либо 0, если извлечение не удалось.
*/

function findPalindrome(numb){
  try{
 
    if(typeof numb !== 'number'){
      new Error(`{status:'failed', reason:TypeError: function's parameter must be a number, ${numb} is not a number}`)
    }

    if(!Number.isInteger(numb)){
      throw new Error(`{status:'failed', reason:TypeError: function's parameter must be an integer number, ${numb} is not an integer number}`)
    }

    if(numb < 10){
      throw new Error(`{status:'failed', reason: TypeError: function's parameter must be more or equal 10, ${numb} is not valid}`)
    }
    if(numb > 9007199254740991){
      throw new Error(`{status:'failed', reason: TypeError: function's parameter must be less than 9007199254740991, ${numb} is not valid}`)
    }


    const findStr = String(numb);
    let maxLength = 2;
    let longerPalindrome = '';
  
    function isPalindrome(str){
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr
  }
  
    for(let i = 0; i < findStr.length; i++){
      const subs = findStr.substr(i, findStr.length);
      for(let j = subs.length; j >= 0; j--){
        const subSubStr = subs.substr(0, j);
        if(subSubStr.length <= 1)
        continue;
  
        if (isPalindrome(subSubStr)){
          if(subSubStr.length >= maxLength)
            maxLength = subSubStr.length;
            longerPalindrome = subSubStr;
        }
      }
    }
  return longerPalindrome || 0

  }catch(err){
    return `${err.name}: ${err.message}`
  }
}
