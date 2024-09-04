const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  mdcn:{
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
