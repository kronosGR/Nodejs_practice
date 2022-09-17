const express = require("express");
const router = express.Router();

const {
  deleteRecipe,
  getAllRecipes,
  getRecipe,
  saveRecipe,
  updateRecipe,
} = require("../controllers/recipe");

// router.get("/", getAll);
// router.post("/", save);
// router.get("/:id", get);
// router.put("/:id", update);
// router.delete("/:id", remove);

router.route("/").get(getAllRecipes).post(saveRecipe);
router.route("/:id").get(getRecipe).put(updateRecipe).delete(deleteRecipe);

module.exports = router;
