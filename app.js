const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.static('public'))

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.get('/', (req, res) => {
    res.render('index.html');
}) 

app.listen(port, () => {
    console.log('ok, less go!');
});