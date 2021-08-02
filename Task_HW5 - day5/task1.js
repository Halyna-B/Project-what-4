/*
Task 1: Quipu Calculator
 - The Quipu is the numbering system of the ancient Incas. A number is represented by knots in a string,
using a positional representation (in base-10).
 - The representation of 123: one knot + space + two knots + space + three knots.
 - Zeros are represented using a blank space. (leading zeros are not allowed).
@ is a knot and ~ is a space.

Create a method that calculates mathematical expressions in quipu format.
*/

function calculatingQuipu(strExp) {
    const quipuLib = {
      0: "~",
      1: "@",
      2: "@@",
      3: "@@@",
      4: "@@@@",
      5: "@@@@@",
      6: "@@@@@@",
      7: "@@@@@@@",
      8: "@@@@@@@@",
      9: "@@@@@@@@@",
      10: "@~",
    };
  
  const replToNumb = strExp.replace(/@+/g, el => el.length);
  const replExp = replToNumb.replace(/~+/g, el => '0'.repeat(el.length - 1));
  const numbAnswer = eval(replExp);
  const strAnswer = String(numbAnswer).split('').join('~');
  
  
  const reg = new RegExp(Object.keys(quipuLib).join('|'), 'g');
  str =strAnswer.replace(reg, matched => quipuLib[matched]);
  return str
  }



calculatingQuipu("@~@@*@@");
