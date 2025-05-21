const express = require('express');
const app = express();
const connectDB = require('./scripts/connectMongoDB')

  connectDB();

app.listen(5000, () => {
    console.log("Server start at http://localhost:5000");
});