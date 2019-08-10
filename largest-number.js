function largestNumber (array) {
    let largest = "";
    for (let index = 0; index < array.length; index++) {
        if (array[index] > largest) {
            largest = array[index];
        }
    }
    return largest;
}

let numberArray = [1, 43 , 55, 78, 99, 3]

console.log(largestNumber(numberArray)); 
