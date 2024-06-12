const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const oauthRoutes = require('./routes/oauth');
const secureRoutes = require('./routes/secure');

const app = express();

// Database connection
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/oauth', oauthRoutes);
app.use('/secure', secureRoutes);

app.listen(3000, () => {
    console.log('OAuth server listening on port 3000');
});