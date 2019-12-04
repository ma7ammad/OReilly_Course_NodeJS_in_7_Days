const inquirer = require("inquirer");
const argv = require("yargs")
  .option("n1", {
    alias: "number1",
    demandOption: true,
    describe: "The first number to perform an operation on",
    type: "number"
  })
  .option("n2", {
    alias: "number2",
    demandOption: true,
    describe: "The second number to perform an operation on",
    type: "number"
  }).argv
  
  const {number1, number2} = argv

  inquirer
    .prompt([
      {
        type: "list",
        name: "operator",
        message: `Please select the mathimatical operation for ${number1} and ${number2} from the list below...`,
        choices: ["Add", "Substract", "Multiply", "Divide"],
        filter: val => {
          return val.toUpperCase();
        }
      }
    ])

    .then(({operator}) => {
      let answer;
      switch (operator) {
        case "ADD":
        answer = number1 + number2;
        break;
        case "SUBSTRACT":
        answer = number1 - number2;
        break;
        case "MULTIPLY":
        answer = number1 * number2;
        break;
        case "DIVIDE":
        answer = number1 / number2;
        break;
        default:
        answer = -1;
      }
      console.log(`The answer is ${answer}`)
    })