// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile (start, end) {
   let result = "";
        while (start <= end) {
            if (start < end) {
            result = result + start + "_";
            start++;
            }
        else {
           return result = result + end;
        }
    }
} 

console.log(numberJoinerWhile(1, 19));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

function numberJoinerFor (start, end) {
    let result = "";
        for (start; start <= end; start++) {
            if (start < end) {
            result = result + start + "_";
            } else {
                return result += end;
            }
        }
}

console.log(numberJoinerFor(4, 44));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3

function numberJoinerFancy (start, end, separator) {
    let result = "";
        if (typeof(separator) === 'undefined') {
            separator = "_";
        }
            for (start; start <= end; start++) {
                if (start < end) {
            result = result + start + separator;
            } else {
                return result += end;
            }
        }
    }

console.log(numberJoinerFancy(1, 10, "bread")) 

