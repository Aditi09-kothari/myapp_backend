const jwt = require("jsonwebtoken");
const userDetailsModel = require("../../model/userModel");

const Login = async (req, res) => {
  const userData = req.body;
  try {
    // Getting the user from the database
    const userFromDB = await userDetailsModel.findOne({
      email: userData.email,
    });
    if (userFromDB) {
      if (userData.password === userFromDB.password) {
        const userEmail = userFromDB.email;
        const token = jwt.sign({ email: userEmail }, process.env.JWT_KEY, {
          expiresIn: "2h",
        });
        res.cookie("entertainment_app_token", token, {
          httpOnly: true,
          sameSite: "None",
          secure: true,
        });
        return res.status(200).json({ statusCode: 200, msg: "You have Successfully LoggedIn your account.." });
      } else {
        return res.status(400).json({ statusCode: 400, msg: "Your Password is incorrect." });
      }
    } else {
      return res.status(400).json({ statusCode: 400, msg: "You are not user." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = Login;
