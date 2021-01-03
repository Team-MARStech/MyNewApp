var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var port = 3000;
/**
 * MiddleWare For App
 */
app.use(bodyParser.json());

//Routes
app.get('/', (req, res, next) => {
    res.send("Hello World")
})

app.get('/sum', (req, res) => {
    console.log(req.query.a);
    console.log(req.query.b);
    res.send(`Sum: ${Number(req.query.a) + Number(req.query.b)}`);
})


app.post('/getParams', (req, res, next) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.sendStatus(200)
})



app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
})