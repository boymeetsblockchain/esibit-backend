const User = require('../models/userModel');
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, } = req.body;
 
  if(!firstName, !lastName , !email, !phoneNumber){
   res.status(400)
   throw new Error("please fill in all fields")
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create the user
  const user = await User.create({
    firstName,
    lastName,
    email,
    phoneNumber,
   
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

module.exports = {
  createUser
};
