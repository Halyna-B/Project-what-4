//Переписать с помощью reduce

const fruits = ["Яблоко", "Банан", "Ананас"];

//['Яблоко', 'Банан', 'Ананас'].map(el => el[0]); //['Я', 'Б', 'А']

const firstLetter = fruits.reduce((acc, el, i) => {
  acc[i] = el[0];
  return acc;
}, fruits);

console.log(firstLetter);

//['Яблоко', 'Банан', 'Ананас'].filter(el => el[0].toLowerCase() == 'a'); //[Ананас]

const firstLowerCaseA = fruits.reduce((acc, el) => {
  if (el[0].toLowerCase() == "а") acc.push(el);
  return acc;
}, []);

console.log(firstLowerCaseA);

// console.log(['Яблоко', 'Банан', 'Ананас'].forEach((el, i, arr) => arr[i] = `${i + 1}: ${el}`))

const arrayOfFruits = fruits.reduce((acc, el, i) => {
  acc[i] = `${i + 1}: ${el}`;
  return acc;
}, fruits);

console.log(arrayOfFruits);
