const express = require('express');
const router = express.Router();

router.get('/tastekim', (req, res) => {
    res.send({message: "tastekim 연결 !"})
})

module.exports = router;