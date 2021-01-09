var express = require('express');
var bodyParser = require('body-parser');
const postRouter = require('./routes/posts-controller');
require('dotenv/config')


var app = express();
var port = process.env.port || 3000;
var host = process.env.host || 'localhost';
/**
 * MiddleWare For App
 */
app.use(bodyParser.json());

//Routes 
app.get('/', async (req, res, next) => {
    res.send("Hello World");
})
// Post Routes 
app.use('/posts', postRouter);

app.post('/getParams', (req, res, next) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Server Started at http://${host}:${port}`);
})