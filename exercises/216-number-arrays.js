// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max (array) {
    let mostHigh = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > mostHigh) {
                mostHigh = array[i];
            }
        }
        return mostHigh;
    }

console.log(max([1, 234, 33, 52]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

function sumNumbers (array) {
  let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = result + array[i];
    }
    return result;
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []


function positives (array) {
    let positiveArray = [];
       for (i = 0; i < array.length; i++) {
           if (array[i] > 0) {
               positiveArray.push(array[i])
           }
       }
    return positiveArray;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

function isEven(number) {
    if (typeof(number) != "number") {
        return false;
    } else if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function evens (array) {
    let evenArray = [];
    for (let i = 0; i < array.length; i++) {
        if (isEven(array[i]) === true) {
            evenArray.push(array[i])
        }
    }
    return evenArray;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

function isOdd(number) {
    if (typeof(number) != "number") {
        return false;
    } else if (number % 2 === 1 || number % 2 === -1) {
        return true;
    } else {
        return false;
    }
}


function odds (array) {
    let oddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (isOdd(array[i]) === true) {
            oddArray.push(array[i])
        }
    }
    return oddArray;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers (array) {
    let integerArray = [];
    for (let i = 0;  i < array.length; i++) {
        if (array[i] % 1 === 0) {
            integerArray.push(array[i])
        }
    }
    return integerArray;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]

function squareDance (array) {
    let squaredArray = [];
    for (let i = 0;  i < array.length; i++) {
        squaredArray.push(array[i] * array[i])
    }
    return squaredArray;
}