/*Task3 - Happy ticket
Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
Т.е. билет с номером 385916 – счастливый, т.к. 3+8+5=9+1+6. 
Вам требуется написать программу, которая проверяет счастливость билета.

- Входные данные:
Одно целое число N (0 ≤ N < 10 ** 6).

- Выходные данные:
Нужно вывести «YES», если билет с номером N счастливый и «NO» в противном случае.
*/


function happyTicket(num) {
    let ticket = String(num);
  
    const zeros = { 1: "00000", 2: "0000", 3: "000", 4: "00", 5: "0" };
    ticket = zeros[`${ticket.length}`] + ticket;
    const sum1 = ticket
      .split("")
      .slice(0, 3)
      .reduce((acc, el) => (acc += Number(el)), 0);
    const sum2 = ticket
      .split("")
      .slice(3, 6)
      .reduce((acc, el) => (acc += Number(el)), 0);
    return sum1 === sum2 ? "YES" : "NO";
  }
  
  console.log(happyTicket(1010));
  