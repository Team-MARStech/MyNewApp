var express = require('express');

var postRouter = express.Router();
const {Post} = require('../models/post')


postRouter.get('/',async (req,res,next)=>{
    var posts = await Post.find();
    res.status(200).json(posts);
    next();
})

postRouter.post('/' , async (req, res, next) => {
    var newPost = new Post({
        title: req.body.title,
        body: req.body.body,
        name: req.body.name
    });
    try {
        var result = await newPost.save();
        res.status(200).json(result);
    }
    catch (ex) {
        res.status(500).json(ex);
    }
    next();
})

postRouter.delete('/:id' ,async (req, res, next) => {
    try {
        var result = await Post.findByIdAndDelete(req.params.id);
        if(!result) {
            throw new Error(`Post Does Not Exist With Id : ${req.params.id}`);
        }
        res.status(200).send(true);

    } 
    catch (er) {
        res.status(500).json({id: req.params.id , deleted : false , message: er.message});
    }
    next();
})

module.exports = postRouter;