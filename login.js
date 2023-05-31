const express = require('express');
const fs = require('fs');


const router = express.Router();
router.use('/login', (req, res, next) => {
    res.send('<form action="/add-form" method="POST"><input type="text" name="username"><button type="submit">Login</button></form>');
});

router.use('/add-form', (req, res, next) => {
    console.log(req.body);
    const username = req.body.username;
    fs.writeFileSync("data.txt", username);
    res.send(`<script>
                localStorage.setItem('username', '${username}');
                window.location.href = '/';
              </script>`);
});


module.exports = router;