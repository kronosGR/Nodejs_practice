const express = require("express");
const path = require("path");
const cors = require("cors");

const recipesRouter = require("./routers/recipes");
const usersRouter = require("./routers/users");
const { handleError } = require("./utils/error");
const auth = require("./middleware/auth");

const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
    `New request to: ${method} ${path} at ${new Date().toDateString()}`
  );
});

// parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth.initialize);

app.get("/", (req, res) => {
  res.redirect("/api/v1/recipes");
});

app.use("/api/v1/recipes", recipesRouter);
app.use("/api/v1/users", usersRouter);

app.use(handleError);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
