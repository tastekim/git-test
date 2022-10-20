const express = require('express');
const app = express();
const { tastekim, JG, DH } = require('./routes');

app.use(tastekim, DH);

app.use('/JG',JG)

app.listen(3000, () => {
    console.log("listening on port 3000")
})