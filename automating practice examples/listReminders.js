require("colors");
const fs = require("fs");
const readlineSync = require("readline-sync");
const { JSON_WHITESPACE, NO_CHOICE_MADE } = require("./constants");

const { reminders } = require("./reminders.json");

if (reminders.length == 0) {
  console.log("No reminders!".green);
  process.exit(0);
}

const index = readlineSync.keyInSelect(
  reminders,
  "What reminders have you dealt with?"
);

if (index === NO_CHOICE_MADE) process.exit(0);

console.log(`you removed '${reminders[index]}'`.red);
reminders.splice(index, 1);
fs.writeFileSync(
  `${__dirname}/reminders.json`,
  JSON.stringify({ reminders }, null, JSON_WHITESPACE)
);
