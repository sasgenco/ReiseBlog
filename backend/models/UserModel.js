const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//unique will convert email to id which makes querying faster
//for that need to install npm install --save mongoose-unique-validator
//unique: true
const userSchema = new Schema({
    username: {
        type:String,
        required: true,

    },
    email:{
        type:String,
        required: true,

    },
    password:{
        type:String,
        required: true
    },
    //salt: String,
    /*places: [{
        type:mongoose.Schema.Types.ObjectId,
        //required: true,
        ref: 'Place'
    }],*/
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema); //collections will be called users