require("colors");
const readLineSync = require("readline-sync");
const path = require("path");
const fse = require("fs-extra");

const GAME_TEMPLATES = "game-templates";
const NO_CHOICE_MADE = -1;

const templatesDir = path.join(__dirname, GAME_TEMPLATES);
const templates = fse.readdirSync(templatesDir);

const index = readLineSync.keyInSelect(templates);

if (index === NO_CHOICE_MADE) process.exit(0);

const projectName = readLineSync.question("What is the name of your game? ", {
  limit: (input) => input.trim().length > 0,
  limitMessage: "The project has to have a name, try again",
});

const confirmCreateDirectory = readLineSync.keyInYN(
  `You entered '${projectName}', create directory with this name?`
);

if (confirmCreateDirectory) {
  const template = templates[index];
  const source = path.join(templatesDir, template);
  const destination = path.join(__dirname, projectName);
  fse
    .copy(source, destination)
    .then(() => console.log(`Successfully created ${destination}`.green))
    .catch((err) => console.error(err));
} else {
  console.log("Aborted creating a new game");
}
