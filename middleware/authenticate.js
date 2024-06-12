const OAuthServer = require('express-oauth-server');
const oauthModel = require('../models/oauthModel');

const oauth = new OAuthServer({
    model: oauthModel
});

module.exports = oauth.authenticate();