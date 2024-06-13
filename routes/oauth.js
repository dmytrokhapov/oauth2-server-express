const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/token', (req, res, next) => {
    console.log(req.body);
    next();
}, authController.token);

module.exports = router;