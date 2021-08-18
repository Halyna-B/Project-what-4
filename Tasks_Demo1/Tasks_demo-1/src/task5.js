/*Задание 5
Счастливые билеты
 - Есть 2 способа подсчёта счастливых билетов:
1. Простой — если на билете напечатано шестизначное число, и сумма первых трёх цифр равна сумме последних трёх, то этот билет считается счастливым.
2. Сложный — если сумма чётных цифр билета равна сумме нечётных цифр билета, то билет считается счастливым.
 - Определить программно какой вариант подсчёта счастливых билетов даст их большее количество на заданном интервале. 

Входные параметры: объект context с полями min и max
Выход: объект с информацией о победившем методе и количестве счастливых билетов для каждого способа подсчёта.
*/

export function happyTicket(context) {
    try {

        if(typeof context !== 'object' || !Array.isArray(context)){
            throw {status:'failed', reason: `TypeError: incorrect arguments was accept, input argument 'context' must be an object with fields min and max`}
        }

        if(typeof context.min !== 'number' || typeof context.max !== 'number'){
            throw {status:'failed', reason: `TypeError: incorrect arguments was accept, in object 'context' fields min and max must be numbers`}
        }

        if(!Number.isInteger(context.min) || !Number.isInteger(context.max) ){
            throw {status:'failed', reason: `TypeError: incorrect arguments was accept, in object 'context' fields min and max must be integer numbers`}
        }

        if( context.min < 0 || context.min >999999){
            throw {status:'failed', reason: `RangeError: incorrect arguments was accept, in object 'context' fields min must be greater than 0 and less than 999999`}
        }

        if( context.max < 0 || context.max >999999){
            throw {status:'failed', reason: `RangeError: incorrect arguments was accept, in object 'context' fields max must be greater than 0 and less than 999999`}
        }

  let numbers = Object.values(context);
  const minNumb = Math.min(...numbers);
  const maxNumb = Math.max(...numbers);

  const zeros = ["000000", "00000", "0000", "000", "00", "0", ""];
  const simpleCount = [];
  const hardCount = [];
  for (let j = minNumb; j <= maxNumb; j += 1) {
    const ticket = `${zeros[String(j).length]}${j}`;
    const tickSplit = ticket.split("");

    const simpleLucky = tickSplit.reduce((acc, el, i) => 
    { acc[~~(i / 3)] += Number(el); 
        return acc }, [0, 0]);
    if (simpleLucky[0] === simpleLucky[1]) simpleCount.push(ticket);

    const hardLucky = tickSplit.reduce((acc, el, i) => 
    { el % 2 !== 0 ? (acc[0] += Number(el)) : (acc[1] += Number(el));
        return acc }, [0, 0]);
    if (hardLucky[0] === hardLucky[1]) hardCount.push(ticket);
  }

  winner = simpleCount.length > hardCount.length ? "simple" : "hard";
  const answer = {
    winner: `${winner}`,
    tickets: { simple: simpleCount.length, hard: hardCount.length },
  };
  return answer;
} catch (err) {
    return err
  }
}

