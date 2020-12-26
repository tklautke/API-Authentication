const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async (req, res) => {
    console.log('/register');
    const user = new User({

        //Body Parser Problem

        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password

        /*
        "name": "Theo",
        "email": "tk@gmail.com",
        "password": "sudo"
         */
    })

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (e) {
        res.statusCode(400).send(e);
    }
})

router.post('/login', (req, res) => {
    console.log('/login');
    res.send('Welcome on /login');
})

module.exports = router;
