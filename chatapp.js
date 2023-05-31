const express = require('express');
const loginRoute = require('./login');
const chatRoute = require('./chat');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoute);

app.use(chatRoute);


app.listen(4000);