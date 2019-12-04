const inquirer = require("inquirer");

let numbers = process.argv;
let operation, answerval,  number1, number2, result;
let output = new Array(0);
numbers.forEach(createnumbersarray);

function createnumbersarray(number, index){
  if(index > 1){
    output.push(number);
  }
}
number1 = Number(output[0]);
number2 = Number(output[1]);

inquirer
  .prompt([
    {
      type: "list",
      name: "inputHandlingReview",
      message: "Please select the mathimatical operation from the list below...",
      choices: ["*", "/", "+", "-"],
      filter: val => {
        answerval = val;
      }
    }
  ])
  .then(answers => {
    operation = answerval;
    if(operation==="+"){result=number1 + number2}
    else if(operation==="-"){result=number1 - number2}
    else if(operation==="*"){result=number1 * number2}
    else if(operation==="/"){result=number1 / number2}
    console.log(`the result = ${result}`)
  });
  