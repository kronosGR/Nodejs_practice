const express = require("express");
const path = require("path");

const app = express();

const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

const port = process.env.PORT || 8000;

app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
    `New request to: ${method} ${path} at ${new Date().toDateString()}`
  );
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/:name", (req, res) => {
  res.send(`Welcome ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
