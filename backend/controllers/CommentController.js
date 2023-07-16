const Comment = require('../models/CommentModel');
const mongoose = require('mongoose');
const User =require('../models/UserModel');

// get all comments
const getComments = async (req, res) =>{
    const comment = await Comment.find({}).sort({createdAt:-1})

    res.status(200).json(comment)
}

// get a single comment
const getComment = async (req, res) =>{
    const { id } = req.params

    const comment = await  Comment.findById(id)

    if(!comment){
        return res.status(404).json({error:'No such comment'})
    }
    res.status(200).json(comment)
}


// create new comment
const createComment = async(req, res) =>{
    const {content, post, userId} = req.body

    try{
        const comment = await Comment.create({content, post, creator: userId})
        res.status(200).json(comment)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}


// delete a Place
const deleteComment = async (req, res) =>{
    const { id } = req.params

    /*
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }
 */
    const comment = await Comment.findOneAndDelete({_id: id})

    if (!comment){
        return res.status(404).json({error: 'No such comment'})
    }
    res.status(200).json(comment)
}

// update a place
const updateComment = async (req, res) =>{
    const { id } = req.params

    /*
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }
 */
    const comment = await Comment.findOneAndUpdate({_id: id}, { ...req.body })

    if (!comment){
        return res.status(404).json({error: 'No such place'})
    }
    res.status(200).json(comment)
}

module.exports = {
    getComments,
    getComment,
    createComment,
    deleteComment,
    updateComment
}
