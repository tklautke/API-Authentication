const express = require('express');
const app = express();
const monggose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')

//IMPORT ROUTES
const authRoute = require('./routes/auth');

// set up BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//MIDDLEWARE
app.use('/api/user', authRoute);
//app.use(express.json());

//getting dotenv up and running
dotenv.config();

//Connect to Database
monggose.connect(process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log('Connected to Database')
    })

app.listen(3000, () => {
    console.log(`Server is up and running on port: 3000`);
})
