const fs = require("fs");
const path = require("path");

const recipesFilePath = path.join(__dirname, "../../db/recipes.json");

const getAll = async () => JSON.parse(await fs.readFile(recipesFilePath));

const save = async (recipe) => {
  const recipes = await getAll();
  recipe.id = recipes.length + 1;
  recipes.push(recipe);
  await fs.writeFile(recipesFilePath, JSON.stringify(recipes));
  return recipe;
};

const update = async (id, updated) => {
  const recipes = await getAll();
  updated.id = parseInt(id);

  const updatedRecipes = recipes.map((recipe) => {
    return recipe.id === parseInt(id) ? updated : recipe;
  });

  await fs.writeFile(recipesFilePath, JSON.stringify(updatedRecipes));
  return updated;
};

const remove = async (id) => {
  const recipes = await getAll();
  const newRecipes = recipes
    .map((recipe) => {
      return recipe.id === parseInt(id) ? null : recipe;
    })
    .filter((recipe) => recipe !== null);
  await fs.writeFile(recipesFilePath, JSON.stringify(newRecipes));
};

const get = async (id) => {
  const recipes = await getAll();
  return recipes.find((recipe) => recipe.id === parseInt(id));
};

module.exports = {
  getAll,
  save,
  get,
  remove,
  update
};
