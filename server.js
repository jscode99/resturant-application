const express = require('express');
//initializing express to app
const app = express();
//import db connection
const connectDB = require('./database/db');


//Connecting DB
connectDB();


















//port setup
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})