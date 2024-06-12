const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, (req, res) => {
    res.send('Welcome to the secure area!');
});

module.exports = router;