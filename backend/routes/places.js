const express =require('express')
const {
    createPlace,
    getPlaces,
    getPlace,
    deletePlace,
    updatePlace
} = require("../controllers/PlaceController")
const router = express.Router()

// get all places
router.get('/', getPlaces)


// get a single place
router.get('/:id', getPlace)


// post new place
router.post('/', createPlace)


// delete a Place
router.delete('/:id', deletePlace)


// update a place
router.patch('/:id', updatePlace)


module.exports = router