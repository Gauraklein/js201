// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse(string) {
    let result = "";
        let stringArray = string.split(""); //creates an array from the string
            for (let index = stringArray.length - 1; index > -1; index--) { //takes the length of the array backwards and adds each character to result
                result += stringArray[index];
            }
                return result;
}

console.log(reverse("test"));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord (string) {
    let result = "";
        let stringArray = string.split(" ");
            for (let index = 0; index < stringArray.length; index++) {
                    if (stringArray[index].length > result.length) {
                        result = stringArray[index];
                    }
            }
        return result;
}

console.log(findLongestWord("This is a test string to see if this is working."));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer (string) {
    let badWords = ['heck', 'darn', 'dang', 'crappy']; //bad words array
    let stringArray = string.split(" "); // converting string to array
        for (let index = 0; index < stringArray.length; index++) { //outer loop to cycle through string that is now an array
                    for (let indexB = 0; indexB < badWords.length; indexB++) { //inner loop to check if any of the bad words are present
                        if (stringArray[index].indexOf(badWords[indexB]) >= 0) { //conditional statement if any of the bad words are found. 
                                stringArray[index] = 'DELETEme'; // replace the bad words with a string for deleting
                        } 
                    }
            }
    let niceArray = stringArray.filter(function(value) { // creating a new array without an of the bad words
                return value != 'DELETEme';
            })
                    return niceArray.join(" "); // converting that array back into a string
                   
    }


console.log(nicer('mom get the heck in here and bring me a darn sandwich.'));


// look into .indexOf and how to return an array without an element

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll (lowercaseString) {
    let lowercaseArray = lowercaseString.split(" "); // creating an array
    let uppercaseArray = []; //creating a new array with uppercase letters
        for (let index = 0; index < lowercaseArray.length; index++) { // loop to run through array
            uppercaseArray.push(lowercaseArray[index].charAt(0).toUpperCase() + lowercaseArray[index].slice(1)); //pushing items into a new array. using charAt and toUppercase to capitilize the first letter, then slice to return the rest of the string
    } return uppercaseArray.join(" ");    //creating a string from the array
}

console.log(capitalizeAll("hehe dhid dhsdaofl lkjdsfl"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split (string, delimiter) {
    let newArray = []; // result array
    let mySplitIndex = string.indexOf(delimiter); //variable for substring position
    if (mySplitIndex < 0) { // if delimter is not found pushes the string and returns array
            newArray.push(string); 
            return newArray;
    } else if (mySplitIndex > 0) { // if delimiter is present
        while (string.length > 0) { //loop to run until string is depleted
            let myOtherSplitIndex = string.indexOf(delimiter); // splitindex for the scope of this loop
        if (myOtherSplitIndex >= 0) { //checks to see if delimiter is there
            let substringToPush = string.substring(0, myOtherSplitIndex) //makes the substring that we will add to the array
                newArray.push(substringToPush); //pushes
                    string = string.substring(substringToPush.length + delimiter.length); //changing string into new substring
    } else { // if delimiter is not found pushes the string and returns array
        newArray.push(string);
        return newArray;
    }
}
}
}

console.log(split('APPLExxBANANAxxCHERRY', 'xx'));

//while loop

// should take a string and loop through it 
// on the loop it should push each into an Array
// there should be a conditional statement that uses the delimiter. 
// So basically if the delimiter is not present then just run through the loop
// if the delimiter is present then print each value into a string until the delimiter is hit
// if delimiter is hit then push to an array