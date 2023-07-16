const Place = require('../models/PlaceModel')
const mongoose = require('mongoose')
const getCoordsForAddress = require('../utils/location')
const getWeatherForCoordinates = require('../utils/weather')
const translateText = require('../utils/translation')

// get all places
const getPlaces = async (req, res) =>{
    const place = await Place.find({}).sort({createdAt:-1}) //user ._id

    res.status(200).json(place)
}

// get a single place
const getPlace = async (req, res) =>{
    const { id } = req.params
    const place = await Place.findById(id)
    console.log(place)
    if(!place){
        return res.status(404).json({error:'No such place'})
    }
    const { title, description, address } = place;
    translateText(title, description, address);

    res.status(200).json(place)
}


// create new place
const createPlace = async(req, res) =>{

//how to get creator??
    const {title, description, address, image} = req.body

    let location;
    try{
        location = await getCoordsForAddress(address)
    }catch (error){
        res.status(400).json({error: error.message})
    }

    let temperature
    try{
        temperature= await getWeatherForCoordinates(location)
    }catch (error){
        res.status(400).json({error: error.message})
    }

    try{
        /*
        const user_id = req.user._id;
        const place= await Place.create({title, description, address, location, temperature, creator: user})
         */
        const place = await Place.create({title, description, address, location, temperature, image})
        res.status(200).json(place)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}
// delete a Place
const deletePlace = async (req, res) =>{
    const { id } = req.params

    /*
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }
 */
    const place = await Place.findOneAndDelete({_id: id})

    if (!place){
        return res.status(404).json({error: 'No such place'})
    }
    res.status(200).json(place)
}

// update a place
const updatePlace = async (req, res) =>{
    const { id } = req.params

    /*
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }
 */
    const place = await Place.findOneAndUpdate({_id: id}, { ...req.body })

    if (!place){
        return res.status(404).json({error: 'No such place'})
    }
    res.status(200).json(place)
}

module.exports = {
    getPlace,
    getPlaces,
    createPlace,
    deletePlace,
    updatePlace
}
