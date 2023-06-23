/*
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
require('dotenv').config();
const protect = async (req, res, next)=>{
    let token

*/
/*
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get Token from header

            token = req.headers.authorization.split(' ')[1]


            const decoded =jwt.verify(token, process.env.JWT_SECRET )
            req.user = await User.findById(decoded.id).select('-password')

            next()

        }catch (error){
        console.log(error)
            res.status(401)
            throw new Error('Not authorised')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorised')
    }
}

module.exports ={
    protect
}
*/