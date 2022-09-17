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
    const recipe = await service.get(req.params.id);
    if (recipe === undefined) {
      const err = new Error("Recipe not found");
      err.statusCode = 404;
      throw err;
    }
    res.json({ data: recipe });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const recipe = await service.get(req.params.id);

    if (recipe === undefined) {
      const err = new Error("Recipe not found");
      err.statusCode = 404;
      throw err;
    }

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
    const recipe = await service.get(req.params.id);

    if (recipe === undefined) {
      const err = new Error("Recipe not found");
      err.statusCode = 404;
      throw err;
    }

    await service.remove(req.params.id);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  save,
  get,
  save,
  update,
  remove,
};
