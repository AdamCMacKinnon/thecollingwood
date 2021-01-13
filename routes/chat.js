const express = require("express");
const router = express.Router();
const socket =  require('socket.io');

router.get('/chat', (req, res) => {
    res.render('chat', {
        pageTitle: "Chat"
    })
})






module.exports = router;