const service = require("../services∕recipes");

const getAll = async (req, res, next) => {
  try {
    res.join({ data: await service.getAll() });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
