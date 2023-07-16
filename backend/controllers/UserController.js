const User = require('../models/UserModel');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const JWT_SECRET = "abc123"
const {protect} = require('../middlewares/auth')


//Generate JWT
const generateToken =(id)=>{
    return jwt.sign({id}, JWT_SECRET, {
        expiresIn: '10d'
    })
}

//get all users
const getUsers = async (req, res) =>{
    let users;
    try {
        users = await User.find({}).sort({createdAt: -1})

    }catch(error){
        console.log("Users not found." + error)
    }
    res.status(200).json({users:users.map(user=>user.toObject({getters:true}))});
}

//LOGIN USER
const getUser = async (req, res) =>{
    const { email, password } = req.body

    //check email

        const user = await User.findOne({email})

        if (user && (await bcrypt.compare(password,user.password))){
            res.status(200).json({
                _id: user.id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id),
            })
        }

        else {
            res.status(404)
            throw new Error("Passwort oder email nicht korrekt.")
        }


}


//SIGN IN
const createUser = async(req, res) =>{
    const {username, email, password} = req.body

    if(!username || !email || !password){
      res.status(400)
      throw new Error('Bitte alle Felder ausfüllen.')
    }
    //Check User
     const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('Diese Benutzer existiert.')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    //create user

        const user = await User.create({username, email, password:hashedPassword})
    if(user){
        res.status(200).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Nicht vollstadig')
    }

}

const getMe = async (req,res)=>{
  const{_id, username, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        username,
        email,
    })
}


//delete a user
const deleteUser = async (req, res) =>{
    const { id } = req.params

    const user = await User.findOneAndDelete({_id: id})

    if (!user){
        return res.status(404).json({error: 'No such user'})
    }
    res.status(200).json(user)
}


//update a user
const updateUser = async (req, res) =>{
    const { id } = req.params

    const user = await User.findOneAndUpdate({_id: id}, { ...req.body })

    if (!user){
        return res.status(404).json({error: 'No such user'})
    }
    res.status(200).json(user)
}

module.exports={
    createUser,
    getUser,
    getUsers,
    getMe,
    deleteUser,
    updateUser,
}