const userDetailsModel = require("../model/userModel");

const checkAuth = async (req, res, next) => {
    const { email } = req.body;
    const user = await userDetailsModel.findOne({
      email: email,
    });
    if (user) {
      return res.status(201).json({
        statusCode: 409,
        status: "failed",
        msg: "It seems you already have an account, please log in instead.",
      });
    } else {
      next();
    }
  };
  module.exports = checkAuth