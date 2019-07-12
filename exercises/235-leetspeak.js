// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"

let originalCharacter = ['a', 'e', 'g', 'i', 'o', 's', 't']; 
let leetCharacter = [4, 3, 6, 1, 0, 5, 7];

function leetspeak (string) {
    string = string.toLowerCase(); 
    
    // converting the whole string to lowercase


    for (let i = 0; i < originalCharacter.length; i++) {
        if (string.indexOf(originalCharacter[i]) >= 0) {

        //for loop that searches for a character plus a conditional for what to do if character is found

            string = string.replace(new RegExp(originalCharacter[i], 'g'), leetCharacter[i]);

            //if that character is found it is replaced with its leet version, I used RegExp to make sure that it catches
            //all instances of the character. The variable string is updated but not returned
        }
    }
    return string;

    //variable returned after every character has been searched for.
}

console.log(leetspeak('orange'));