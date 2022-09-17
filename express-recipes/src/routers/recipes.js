const express = require("express");
const router = express.Router();

const { getAll, save } = require("../controllers/recipes");

router.get("/", getAll);
router.post("/", save);

module.exports = router;
