var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const postRouter = require('./routes/posts-controller');
require('dotenv/config')


var app = express();
app.use(cors({
    allowedHeaders : "*",
    methods : "*"
}));



var port = process.env.port || 3000;
var host = process.env.host || 'localhost';
const uri = process.env.DB_CONNECTION;

/**
 * MiddleWare For App
 */
app.use(bodyParser.json());

//Routes
app.get('/', (req, res, next) => {
    res.send("APi Started")
})
// Post Routes 
app.use('/posts', postRouter);

// app.get('/sum', (req, res) => {
//     console.log(req.query.a);
//     console.log(req.query.b);
//     res.send(`Sum: ${Number(req.query.a) + Number(req.query.b)}`);
// })


// app.post('/getParams', (req, res, next) => {
//     console.log(req.body);
//     console.log(req.params);
//     console.log(req.query);
//     res.sendStatus(200)
// })


mongoose.connect(uri ,  { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(port, () => {
    console.log(`Server Started at http://${host}:${port}`);
})