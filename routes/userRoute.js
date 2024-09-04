const express = require("express")
const { createUser } = require("../controllers/createUser")

const userRoute = express.Router()
userRoute.post('/create',createUser)


module.exports = userRoute