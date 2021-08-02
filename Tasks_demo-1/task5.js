/*Задание 5
Счастливые билеты
 - Есть 2 способа подсчёта счастливых билетов:
1. Простой — если на билете напечатано шестизначное число, и сумма первых трёх цифр равна сумме последних трёх, то этот билет считается счастливым.
2. Сложный — если сумма чётных цифр билета равна сумме нечётных цифр билета, то билет считается счастливым.
 - Определить программно какой вариант подсчёта счастливых билетов даст их большее количество на заданном интервале. 

Входные параметры: объект context с полями min и max
Выход: объект с информацией о победившем методе и количестве счастливых билетов для каждого способа подсчёта.
*/

function happyTicket(context) {
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
}

console.log(happyTicket({ min: 42999, max: 43003 }));
