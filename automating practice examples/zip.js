const archiver = require("archiver");

const fs = require("fs");
const path = require("path");

const filePath1 = path.join(__dirname, "copy.txt");
const filePath2 = path.join(__dirname, "logo.jpg");
let prevBytes = 0;

fs.stat(filePath1, (err, stats) => {
  if (err) {
    console.error("File does not exist");
  } else {
    prevBytes += stats.size;
  }
});

fs.stat(filePath2, (err, stats) => {
  if (err) {
    console.error("File does not exist");
  } else {
    prevBytes += stats.size;
  }
});

console.log(`\nTotal bytes before archiving: ${prevBytes}`);

const ZLIB_COMPRESSION = 9;
const zipPath = path.join(__dirname, "files.zip");
const output = fs.createWriteStream(zipPath);
const archive = archiver("zip", {
  zlib: { level: ZLIB_COMPRESSION },
});

output.on("close", () => {
  console.log(`\nTotal bytes: ${archive.pointer()}`);
});

output.on("error", (err) => {
  throw err;
});

archive.pipe(output);
const textPath = path.join(__dirname, "copy.txt");
const logoPath = path.join(__dirname, "logo.jpg");

archive.append(fs.createReadStream(textPath), { name: "content.txt" });
archive.append(fs.createReadStream(logoPath), { name: "robot.jpg" });

archive.finalize();
