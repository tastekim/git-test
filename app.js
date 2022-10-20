const express = require('express');
const app = express();
const tastekim = require('./routes/tastekim');
const JG = require('./routes/JG');
const DH = require('./routes/DH');

app.use(tastekim, JG, DH);

app.listen(3000, () => {
    console.log("listening on port 3000")
})