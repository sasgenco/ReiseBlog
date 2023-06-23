const express =require('express')
const {
    getComments,
    getComment,
    createComment,
    deleteComment,
    updateComment
} = require("../controllers/CommentController")
const router = express.Router()


// get all comments
router.get('/', getComments)

// get a single comment
router.get('/:id', getComment)

// post new comment
router.post('/', createComment)

// delete a comment
router.delete('/:id', deleteComment)


// update a comment
router.patch('/:id', updateComment)


module.exports = router