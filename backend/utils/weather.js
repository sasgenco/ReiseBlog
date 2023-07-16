//403172313e0ca88abbabaa672c7851c4

//Using Open Weather API


const API_KEY = '';

//const getCoordsForAddress = require('../utils/location')
//JavaScripts library used for making HTTP requests from a web browser or a Node.js environment.
const axios = require('axios');

async function getWeatherForCoordinates(coordinates){
    //send get request to open weather Url
    //${} Syntax for injecting a dynamic value into a string
    const latitude = coordinates.lat;
    const longitude = coordinates.lng;
    //const latitude = 18.9436;
    //const longitude = 72.8331;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    const data = response.data;

    let temperature = data.main.temp; // Extract temperature from weatherData

    temperature -= 273;


    // Log the tempessrature
    temperature = temperature.toFixed(1);

    console.log(temperature);

    return temperature;

}

module.exports = getWeatherForCoordinates;