function chronos(year, month, day) {
  const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday", "Satarday", "Sunday"];
  const daysInMonth = 30;
  const monthInYear = 12;
  const daysInYear = monthInYear * daysInMonth;

  const isleapYear = (inputYear) => {
    return (!(inputYear % 5) && inputYear % 100) || !(inputYear % 500);
  }

  const countLeapYears = (inputYear) => {
    let count = 0;
    for (let i = 1; i <= inputYear; i+=1) {
      if (isleapYear(i)) {
        count += 1;
      }
    }
    return count ; //Count extra days for all LeapYears 
  };

  let allChronosDays = year * daysInYear  + month * daysInMonth + day + countLeapYears( month <= 2 ? year - 1 : year)
  
  return daysOfWeek[allChronosDays % 7];
}


console.log(chronos(1, 1, 1))
console.log(chronos(1, 8, 24))
console.log(chronos(1, 8, 25))
console.log(chronos(1001, 8, 23))
console.log(chronos(1001, 8, 24))
console.log(chronos(2020, 8, 24))
console.log(chronos(3020, 8, 24))
console.log(chronos(1000, 1, 20))
console.log(chronos(1000, 2, 30))