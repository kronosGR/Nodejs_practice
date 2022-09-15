const fs = require("fs").promises;

const getStats = async (path) =>{
  try {
    const stats = await fs.stat(path)
    console.log(stats)
    console.log(`isFile: ${stats.isFile()}`)
    console.log(`isDirectory: ${stats.isDirectory()}`)
  } catch (e) {
    console.error(e)
  }
}

const readFile = async (path)=>{
  try {
    const contents = await fs.readFile(path, 'utf-8')
    console.log(contents)
  } catch (e) {
    console.error(e)
  }
}

// getStats("./test.txt");
readFile("./test.txt")