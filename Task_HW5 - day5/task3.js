/*

*/

function clerk(arr){

  const result = arr.reduce((acc, el) => {
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

return result !=='NO'? 'YES' : 'NO'
}