const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const db = require('./db/db');
const userRoute = require('./routes/userRoute');
const doctorRoute = require('./routes/doctorRoute')
const cors = require("cors")
db();


const allowedOrigins = ['http://localhost:3000', 'https://www.esibiti.com'];


// Middleware to parse JSON and URL-encoded payloads
app.use(express.json());
app.use(cors({ credentials: true, origin: allowedOrigins }));

app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user', userRoute);
app.use('/api/doctor', doctorRoute);




app.get('/', (req,res)=>{
    res.send("Hello World")
})

// Start the server
app.listen(5000, () => {
    console.log("Server is active on port 5000");
});
