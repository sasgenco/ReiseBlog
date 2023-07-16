
const API_KEY = '';
//returns the coordinates wrapped in a promise
//installed package axios to send request from my node server to another backend

const axios = require('axios');

//let address = "Nordhäuser Str. 63, 99089 Erfurt."

async function getCoordsForAddress(address){

    // das ist zum testen, falls der Key nicht funktioniert, kannst du diese fixed Coords benutzen
    /*return{
        lat:40.7484474,
        lng:-73.9871516
    }*/
//send get request to google url
    //${} Syntax for injecting a dynamic value into a string encode gets rid of special charachters

    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`)

    //axios gives a data field
    const data = response.data;

    if(!data || data.status === 'ZERO_RESULTS')
    {
        console.log('Address not found.')
    }

    const coordinates = data.results[0].geometry.location;

    console.log(coordinates)
    return coordinates;
}


module.exports = getCoordsForAddress;