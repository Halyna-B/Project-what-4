/*
Task 2: Morse code decoder
- You have to write a simple Morse code decoder. Your task is to implement a function
that would take the morse code as input and return a decoded human-readable string.
- NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
*/

function morseDecoder(inputCode){

    const codeMorse = {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }

       const wordSplit = inputCode.trim().split(' ').map(el => { return Object.keys(codeMorse).find(key => codeMorse[key] === el) || ' '});
       const text = wordSplit.join('').replace(/\s+/g, ' ').toUpperCase();
       return text
}

morseDecoder('.... . -.--   .--- ..- -.. .')