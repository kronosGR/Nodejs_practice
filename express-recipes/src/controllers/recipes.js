const service = require("../services∕recipes");

const getAll = async (req, res, next) => {
  try {
    res.join({ data: await service.getAll() });
  } catch (error) {
    next(error);
  }
};

const save = async (req, res, next) => {
  try {
    const {
      name,
      healthLabels,
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients,
    } = req.body;
    const newRecipe = {
      name,
      healthLabels: [...healthLabels],
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients: [...ingredients],
    };
    res.status(201).json({ data: await service.save(newRecipe) });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    res.json({ data: res.locals.recipe });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const {
      name,
      healthLabels,
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients,
    } = req.body;

    const updated = await service.update(req.params.id, {
      name,
      healthLabels: [...healthLabels],
      cookTimeMinutes,
      prepTimeMinutes,
      ingredients: [...ingredients],
    });

    res.json({ data: updated });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const recipeExists = async (req, res, next) => {
  const recipe = await service.get(req.params.id);

  if (recipe === undefined) {
    const error = new Error("Recipe not found");
    error.statusCode = 404;
    next(error);
  } else {
    res.locals.recipes = recipe;
    next();
  }
};

module.exports = {
  getAll,
  get: [recipeExists, get],
  save,
  update: [recipeExists, update],
  remove: [recipeExists, remove],
};
