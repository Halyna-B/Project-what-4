


function chronos(year, month, day){
    const monthInYear = 12;
    const daysInMonth = 30;
    const daysInLeapMonth = leapYear(year);
     
   function leapYear(inputYear){
   return (year % 5|| year % 500) ? 30 : 31;
   }
  
   const daysInYear = monthInYear*daysInMonth
  
  
    const chronosCalendar = year * daysInMonth + month * daysInMonth + day;
      const daysOfWeek = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satarday','Sunday'];
      console.log(daysOfWeek[chronosCalendar%daysOfWeek.length])
    
  }
  
  chronos(1001, 8, 24)