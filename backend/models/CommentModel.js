const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    },
    post: {
        type: String,
        //required: true
    },

},{ timestamps: true })

module.exports = mongoose.model("Comment", commentSchema)