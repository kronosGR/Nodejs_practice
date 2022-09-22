const { platform } = require("os");
const { exec } = require("child_process");

const osPlatform = platform();
const args = process.argv.slice(2);
const [url] = args;

if (url === undefined) {
  console.error("Please pass a URL");
}

let command = `google-chrome --no-sandbox ${url}`;

console.log(`executing command: ${command}`);
exec(command);
