const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const placeSchema = new Schema({
    image:{
        type: String,
        //required: true
    },
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    location:{
        lat: {type: Number, required:true},
        lng: {type: Number, required: true},
    },
    temperature:{
        type: Number
    },
    user_id:{
        type: String,
        type:mongoose.Schema.Types.ObjectId,
        //required: true,
        ref: 'User'}
},{ timestamps: true });

module.exports = mongoose.model('Place', placeSchema);