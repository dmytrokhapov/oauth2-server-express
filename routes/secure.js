const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const secureController = require('../controllers/secureController');

router.get('/oauth', authenticate, secureController.secure);

module.exports = router;