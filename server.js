const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//////// start of the connection to mongoDB will always be this same stuff as below.
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

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
    console.log(`sever is up and running on port ${port}`)
});


