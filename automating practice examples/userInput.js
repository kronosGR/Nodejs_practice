const fs = require("fs");
const readline = require("readline");
const { stdin, stdout } = require("process");
const path = require("path");

const interfaceInstance = readline.createInterface(stdin, stdout);

const createProjectDirectory = (enteredName) => {
  const name = enteredName.trim();
  if (name === "") {
    console.log("Cannot create a file without a name");
    process.exit(0);
  }

  const projectPath = path.join(__dirname, name);
  if (fs.existsSync(projectPath)) {
    console.log(`${name} already exists\n`);
    process.exit(0);
  }

  console.log(`\nCreatubg a new project called ${name}\n`);
  fs.mkdirSync(projectPath);
};

const onProjectInput = (name) => {
  interfaceInstance.close();
  stdin.destroy();
  createProjectDirectory(name);
};

interfaceInstance.question("\nWhat is the name of the project", onProjectInput);
