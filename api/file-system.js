const fs = require("fs").promises;

const getStats = async (path) => {
  try {
    const stats = await fs.stat(path)
    console.log(stats)
    console.log(`isFile: ${stats.isFile()}`)
    console.log(`isDirectory: ${stats.isDirectory()}`)
  } catch (e) {
    console.error(e)
  }
}

const readFile = async (path) => {
  try {
    const contents = await fs.readFile(path, 'utf-8')
    console.log(contents)
  } catch (e) {
    console.error(e)
  }
}

const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data)
  } catch (e) {
    console.error(e)
  }
}

const appendFile = async (path, data) => {
  try {
    await fs.appendFile(path, data)
  } catch (e) {
    console.error(e)
  }
}

// getStats("./test.txt");
readFile("./test.txt")
appendFile("./test.txt", "new text")
