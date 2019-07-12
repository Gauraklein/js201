// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'


    let vowels = ["aa", "ee", "ii", "oo", "uu"]; // array

function longLongVowels (string) {
    stringArray = []
    for (let i = 0; i < string.length; i++) { 
        let splitPoint = vowels[i];
        if (string.indexOf(splitPoint) > 0) { // for loop that cycles through the string to see if the vowels are present
            stringArray = string.split(splitPoint);
        }
    }
    return stringArray;
}

console.log(longLongVowels('Good'));
//for loop that cycles through double vowels in an array
//if it finds a match then it would split the string into an array without the vowels
//then it will add in five of that vowel to the middle of the array then rejoin it?

