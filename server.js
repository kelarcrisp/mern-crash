const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//////// start of the connection to mongoDB will always be this same stuff as below.
// the uri below is the connection string we get from the mongodb dashboard. and store it in .env
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongoDB connection established succesffully')
})
//////////// ----end of connection

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`)
});


// ---steps in which to approach a backend setup with express and mongo------

//1. setup the server file in which will contain the server connection and the initial connection to mondoDb with mongoose.
//2. set up your schemas, which are essentially just an outline of what your database is going to contain input for. 
//3. set up your api end points and the info youd like those end points to contain. after creating your end point files go back into your main file so 'server' in our case and tell express to require those files and then tell express to use those files.