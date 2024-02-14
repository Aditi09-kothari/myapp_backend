const userDetailsModel = require("../../model/userModel");

const SignUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the email is already registered
    const existingUser = await userDetailsModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ statusCode: 400, msg: "Email already exists." });
    }

    // Store user details with plain password
    const newUser = new userDetailsModel({ email, password });
    await newUser.save();
    
    return res.status(200).json({
      statusCode: 200,
      msg: "Your account has been successfully created.",
    });
  } catch (error) {
    return res.status(400).json({ statusCode: 400, msg: error.message });
  }
};

module.exports = SignUp;
