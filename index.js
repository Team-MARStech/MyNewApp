var express = require('express');
var bodyParser = require('body-parser');
const postRouter = require('./Routes/posts-controller');
const { startDbConnection, closeDbConnection } = require('./util/db-connect');

var app = express();
var port  = 3000;
/**
 * MiddleWare For App
 */
app.use(bodyParser.json());

//Routes 
app.get('/', async (req,res,next)  => {
    res.send("Hello World")
    await startDbConnection();
})
// Post Routes 
app.use('/posts',postRouter);

app.post('/getParams' , (req,res,next)=>{
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.sendStatus(200)
})



app.listen(port , () => {
    console.log(`Server Started at http://localhost:${port}`);
})