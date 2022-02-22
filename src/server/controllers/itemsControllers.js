const Item = require("../../database/models/Item");

const getItemsList = async (req, res, next) => {
  try {
    const itemsList = await Item.find({ user: req.userId });
    res.status(200).json(itemsList);
  } catch (error) {
    next(error);
  }
};

module.exports = getItemsList;
