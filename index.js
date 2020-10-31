const chalk = require("chalk");
const log = console.log;

log(
  chalk.yellow(
    "I'm a yellow line " +
      chalk.blueBright.underline.bold("with a blue substring") +
      " then comes green again"
  )
);
