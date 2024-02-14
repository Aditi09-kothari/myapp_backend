require('dotenv').config()
const mongoose = require("mongoose");
//Connect To DATABASE
async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL); 
     console.log("Database connected!!");
  } catch (error) {
     console.log("error", error);
  }
}
module.exports = ConnectDB;