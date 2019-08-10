// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]

function matrixAdd (array1, array2) {
    let result = [[],[]];

        for (let i = 0; i < array1.length; i++) {
            //for loop to target the first array
            for (let j = 0; j < array1[i].length; j++) {
                //for loop cycling through nested array and adding the correct numbers together
                result[i].push(array1[i][j] + array2[i][j]);
            }
        }
    return result;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]

function matrixMultiply (array1, array2) {
   let result = [[],[]]
    let array1Result = [[],[]];
    let array2Result = [[],[]];
    //for loop that gives the result of array1 multiplication
    for (let i = 0; i < array1.length; i++) {
        if (i === 0) {
            for (let j = 0; j < array2[i].length; j++) {
                if (j === 0) {
                array1Result[i].push(array1[i][i] * array2[i][i])
                } else {
                    array2Result[i].push(array1[i][i] * array2[i][i])
                }
            }
        } else {

                for (let j = 0; j < array2[i].length; j++) {
                    if (j === 0) {
                        array1Result[i].push(array1[i][j] * array2[i][j])
                    } else {
                        array2Result[i].push(array1[i][j] * array2[i][j])
                    }
                }
            }

    }
    console.log(array1Result)
    console.log(array2Result)
    return result;
}

console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));