// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(num) {
   let result = "";

   if (num === 0) {
       return result;
   } else {
        for (let i = 1; i <= num; i++) {
            for (let j=0; j < num; j++) {
            result = result + "*";
            }
            
            if (i === num) {
                return result;
            } else {
            result = result + "\n";
            }
        }
    }
}

console.log(makeSquare(0));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(width, height) {
    let result = "";

    if (width === 0 || height === 0) {
        return result; //if a condition is 0 will return empty string
    } else {
    for (let i=1; i <=  height; i++) {
        
        //a loop that goes through the height and prints each answer
            
            if (i === 1) { //conditional to grab the first line
                for (let firstLine=0; firstLine < width; firstLine++) {
                    result += "*";
                    //for loop for first line that prints the character
                } if (height !== 1) {
                result += "\n"; //newline
                } 

            } else if (i !== 1 && i !== height) { //grabs other lines
                for (let oddLine=1; oddLine <= width; oddLine++) { //cycles through the line 
                    if (oddLine === 1) { //if first character print a star
                        result += "*";
                    } else if (oddLine !== 1 && oddLine !== width) { //for the middle characters add a space
                        result += " ";
                    } else { //for the last character print a start then add a newline
                        result += "*\n";
                    }
                }
            } else if (i === height) { //
                for (let lastLine = 0; lastLine < width; lastLine++) { //for loop to print last line
                    result += "*"; 
                }
            }
        
        }
    } 
return result;
}
console.log(makeBox(6,4));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(string) {
    result = "";

        for (let firstLine = 0; firstLine < string.length + 4; firstLine++) {
            result += "*";
        } 
        result += "\n"
        for (let secondLine = 0; secondLine < string.length + 4; secondLine++) {
            if (secondLine === 0 || secondLine === string.length + 3) {
                result += "*"
            } else if (secondLine === 1 || secondLine === string.length +2) {
                result += " ";
            } else if (secondLine === 2) {
                result += string;
            }
        }
        result += "\n";
        for (let lastLine = 0; lastLine < string.length + 4; lastLine++) {
            result += "*";
        }

    return result;
}

console.log(makeBanner('Welcome to DigitalCrafts'));