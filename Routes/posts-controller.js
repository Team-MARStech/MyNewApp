var express = require('express');

var postRouter = express.Router();

postRouter.get('/', (req,res,next)=>{
    console.log(req.query);
    res.write("Get Post");
    next();
})

module.exports = postRouter;