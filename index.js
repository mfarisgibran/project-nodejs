const chalk = require("chalk");
const log = console.log;
const timeago = require("timeago.js");

log(
  chalk.yellow(
    "I'm a yellow line " +
      chalk.blueBright.underline.bold("with a blue substring") +
      " then comes green again"
  )
);

log(timeago.format("2020-02-31"));
