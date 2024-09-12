const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const db = require('./db/db');
const userRoute = require('./routes/userRoute');
const doctorRoute = require('./routes/doctorRoute')
const cors = require("cors")
db();


const allowedOrigins = ['http://localhost:3000', 'https://www.esibiti.com'];

// CORS options
const corsOptions = {
    origin: '*',  // Allows all origins 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  
    optionsSuccessStatus: 204
  };


// Middleware to parse JSON and URL-encoded payloads
app.use(express.json());
app.use(cors(corsOptions))

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
