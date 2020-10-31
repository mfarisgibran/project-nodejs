const chalk = require("chalk");
const log = console.log;

log(
  chalk.green(
    "I'm a green line " +
      chalk.blueBright.underline.bold("with a blue substring") +
      " then comes green again"
  )
);
