const chalk = require("chalk");
const colours = ["red", "green", "blue"]
console.log(chalk.blue('Hello World'));

colours.forEach(function(colour) {
  console.log(chalk[colour]('Hello World'));
})