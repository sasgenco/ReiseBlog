const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const placeRoutes = require('./routes/places')
const commentRoutes = require('./routes/comments')
const middleware = require('./middlewares/middleware')
//const translateText = require('./utils/translation')

// express app
const app = express();

// middleware
app.use(middleware);

//translation route
const translateText = require('./utils/translation')
app.post('/api/translation', translateText);
//midle ware for CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Header', 'Origin,X-Requested-With, Content-Type,Accept,Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PATCH, DELETE')
    next();
});
// routes
app.use('/api/users', userRoutes)
app.use('/api/places',placeRoutes)
app.use('/api/comments',commentRoutes)


// Database connection
const mongoIn = 'mongodb://root:example@mongodb:27017/'; // container
const mongoOut = 'mongodb://root:example@localhost:27017/'; // not in container
const dbName = 'GrabYourbags';
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: dbName
};

mongoose.connect(mongoOut, dbOptions)
    .then(() => {
        // listen for requests, param is port
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening to port ', process.env.PORT);
        });
    })
    .catch(error => {
        console.log('Error connecting to db or port:', error);
    });

// listen for requests

/*
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT)
})
*/