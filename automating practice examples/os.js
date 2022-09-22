const os = require("os");

const homeDirectory = os.homedir();
console.log(`Home directory is: ${homeDirectory}`);

const osPlatform = os.platform();
console.log(`The Os platform is: ${osPlatform}`);

const cpuCores = os.cpus();
const coreCount = cpuCores.length;
const cpuModel = cpuCores[0].model;

console.log(` your cpu ${cpuModel} has ${coreCount} cores`);
