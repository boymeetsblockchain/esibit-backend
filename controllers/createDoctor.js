const Doctor = require('../models/doctorModel');
const asyncHandler = require("express-async-handler");

const createDoctor = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber,mdcn } = req.body;
 
  if(!firstName, !lastName , !email, !phoneNumber, !mdcn){
   res.status(400)
   throw new Error("please fill in all fields")
  }
  const userExists = await Doctor.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('Doctor already exists');
  }

  // Create the user
  const user = await Doctor.create({
    firstName,
    lastName,
    email,
    phoneNumber,
     mdcn
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      phoneNumber: user.phoneNumber,
      message:"doctor Created successfully",
      success:true
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

module.exports = {
  createDoctor
};
