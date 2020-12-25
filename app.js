const express = require('express');
const app = express();

const port = 3000

//IMPORT ROUTES
const authRoute = require('./routes/auth');

//MIDDLEWARE
app.use('/api/user', authRoute);


app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
})
