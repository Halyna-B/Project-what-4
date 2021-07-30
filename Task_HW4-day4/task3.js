function chronos(year, month, day) {
  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satarday"];
  const daysInMonth = 30;
  const monthInYear = 12;
  const daysInYear = monthInYear * daysInMonth;

  const isleapYear = (inputYear) => {
    return (!(inputYear % 5) && inputYear % 100) || !(inputYear % 500);
  }

  const countLeapYears = (inputYear) => {
    let count = 0;
    for (let i = 0; i <= inputYear; i++) {
      if (isleapYear(i)) {
        count += 1;
      }
    }
    return count; //Count extra days for all LeapYears 
  };

  const allChronosDays = year * daysInYear + countLeapYears(year) + month * daysInMonth + day;
  
  return daysOfWeek[allChronosDays % daysOfWeek.length];
}

console.log(chronos(1001, 8, 24));
