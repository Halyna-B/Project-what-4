/*

*/

function clerk(arr){

  const re = arr.reduce((acc, el) => {
if(el===25){
  acc[0]+= 1;
  return acc;
}
if(el===50){
  acc[1]+= 1;
  acc[0]-= 1;
  return acc;
}
if(el===100){
  acc[0]-= 1;
  acc[1] > 0 ? acc[1]-= 1 : acc[0] -= 2;
return acc[0] < 0 || acc[1] < 0  ? 'NO' : acc;
}
  }, [0,0,0]);

return re !=='NO'? 'YES' : 'NO'
}