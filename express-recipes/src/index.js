const express = require('express')
const path = require('path')

const app = express();

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 8000

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.get("/:name", (req,res)=> {
  res.send(`Welcome ${req.params.name}`);
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})