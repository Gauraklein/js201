// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

function gcd (numA, numB) {
    let divisors = [];
    let commonDivisors = [];
    let greatestCommonDivisor = 1;
        
        // setting up the different variables
    
        for (let i = 0;  i < numA; i++) {
            if (numA % i === 0) {
                divisors.push(i);
            }
        }

        // numA divisors getting pushed to an array

        for (let i = 0;  i < numB; i++) {
            if (numB % i === 0) {
                divisors.push(i);
            }
        }
        
        // numB divisors getting pushed to an array. not sure about the scope here as I am reusing i. lets see what happens.

        function compareDivisors (array) {

            for (let i = 0;  i < divisors.length; i++) {
                    let divisorInFocus = divisors[i];
                for (let j = 0; j < divisors.length; j++) {
                    if (divisors[j] === divisorInFocus) {
                        commonDivisors.push(divisors[j])
                    }
                }
            } 
            return commonDivisors;
        }


        commonDivisors = compareDivisors(divisors);


        //for loop within a for loop that takes a number from the divisors array and looks for a match in the array
        //if it finds one it prints it to a new array


        for (let i = 0;  i < commonDivisors.length; i++) {
            if (greatestCommonDivisor < commonDivisors[i])
            greatestCommonDivisor = commonDivisors[i];
        }

        // for loop to run through commonDivisors and return the highest number. 
        // if this array is empty I'm assuming that it returns greatestCommonDivisor as 1 as declared at the beginning
        // I think this function could be improved by adding a conditional somewhere to make sure that 1 is returned if no GCD exists
        //but for now it works, so I'm not going to mess with it.

        return greatestCommonDivisor;
    }



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

function factors (number) {
    let factorArray = [];
    for (let i = 0;  i <= number; i++) {
        if (number % i === 0) {
            factorArray.push(i);
        }
    }
    return factorArray;
}

console.log(factors(42))