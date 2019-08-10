// Write a function "recognizeEmployees" that takes two arguments:
// 1) an array of names of people to be recognized
// 2) an array of employees of the month
// Return an array telling everyone that they did a great job, except employees
// of the month did an outstanding job.
//
// Examples:
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])
// > ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']
//
// Hint: What is the best data structure for the employees of the month list?

function recognizeEmployees (employeeArray, recognizedArray) {

    let result = [];
      //loop that runs through employee array
      for (let employeeLoop = 0; employeeLoop < employeeArray.length; employeeLoop++) {
        //loop that runs through recognized employees
        for (let recognizedLoop = 0; recognizedLoop < recognizedArray.length; recognizedLoop++) {
          //conditional: checks if employee is on recognized list
          if (employeeArray[employeeLoop] === recognizedArray[recognizedLoop]) {
            result.push('Outstanding job, ' + employeeArray[employeeLoop] + '!');
              //if they are not pushes great job: using .length - 1 to ensure recognized employees has been fully looped through
            } else if (employeeArray[employeeLoop] !== recognizedArray[recognizedLoop] && recognizedLoop === recognizedArray.length - 1) {
            result.push('Great job, ' + employeeArray[employeeLoop] + '!');
            }
          }
         
        
        }
    return result;
    }
    
    
    console.log(recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan']));