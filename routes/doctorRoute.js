const express = require("express")
const { createDoctor } = require("../controllers/createDoctor")

const doctorRoute = express.Router()
doctorRoute.post('/create',createDoctor)


module.exports = doctorRoute