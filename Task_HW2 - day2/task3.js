/*Task 3:
Shortest Word
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/


function shortestWord(str){
    const arrOfWords = str.split(' ');
    const arrOfLength = arrOfWords.map(el => el.length);
    return Math.min(...arrOfLength);
}

