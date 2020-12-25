const router = require('express').Router();

router.post('/register', (req, res) => {
    console.log('/register');
    res.send('Welcome on /register');
})

router.post('/login', (req, res) => {
    console.log('/login');
    res.send('Welcome on /login');
})

module.exports = router;
