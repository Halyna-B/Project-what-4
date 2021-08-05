/*

*/



function clerk(arr){

    const re = arr.reduce((acc,el) => {
      if(el===25){
        acc += el
      return acc;
      }
      if(acc - (el - 25) >= 0){
          return acc = acc - (el - 25) + el;
        }else{
          return 'NO'
        }
      return acc
    }, 0)
    
    return re !== 'NO' ? 'YES' : 'NO'
    
    }
