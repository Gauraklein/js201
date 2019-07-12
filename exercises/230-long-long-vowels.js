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


// function longLongVowels (string) {
//    if (string.indexOf('aa') >= 0) {
//        var longString = string.replace('aa', 'aaaaa');
//        return longString;
//    } else if (string.indexOf('ee') >= 0) {
//         var longString = string.replace('ee', 'eeeee');
//         return longString;
//    } else if (string.indexOf('ii') >= 0) {
//         var longString = string.replace('ii', 'iiiii');
//         return longString;
//    } else if (string.indexOf('oo') >= 0) {
//         var longString = string.replace('oo', 'ooooo');
//         return longString;
//    } else if (string.indexOf('uu') >= 0) {
//         var longString = string.replace('uu', 'uuuuu');
//         return longString;
//    } else return string;
// }

// Long Solution


function longLongVowels (string) {

    let vowels = ['aa', 'ee', 'ii', 'oo', 'uu'];
    let longVowels = ['aaaaa', 'eeeee', 'iiiii', 'ooooo', 'uuuuu'];
    let longString = "";

        for (let i = 0; i < vowels.length; i++) {
            
            if (string.indexOf(vowels[i]) >= 0) {
                let longString = string.replace(vowels[i], longVowels[i]);
                return longString;
            }

        }
    return string;
}


//Cleaner solution, instead of using a series of if else statements I loop through an array that contains long vowels
//If I find a match the loop runs the replace function and returns the result
//It passes the test, but I would need to do some tweaking if there were multiple sets of long vowels in a word
