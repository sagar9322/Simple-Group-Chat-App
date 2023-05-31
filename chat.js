const express = require('express');
const fs = require('fs');

const router = express.Router();


router.get('/', (req, res, next) => {
    let msg = fs.readFileSync("message.txt");
    res.send(`<div>${msg}</div>
    <form action="/chat" method="POST"><input type="text" name="chat"><button type="submit">Send</button></form>`);
});

router.use('/chat', (req, res, next) => {

    console.log(req.body);
    const username = req.body.chat;
    let user = fs.readFileSync("data.txt");
    let msg = fs.readFileSync("message.txt");
    fs.writeFileSync("message.txt", `<strong>${user}</strong>`+":"+ username + " " + msg);
    res.redirect('/');
});

module.exports = router;