const express = require('express');
const JG = express.Router();

JG.get('/', (req,res) => {
    res.send("정정길 첫 페이지")
});

module.exports = JG;