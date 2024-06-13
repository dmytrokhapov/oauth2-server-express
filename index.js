const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { sql, connectDB } = require('./config/db');
const oauthRoutes = require('./routes/oauth');
const secureRoutes = require('./routes/secure');

const app = express();

// Database connection
connectDB().then(async () => {
    const hashedPassword = await bcrypt.hash('test_password', 10);

    // Insert test user with hashed password
    await sql.query`INSERT INTO oauth_users (username, password, role, email, permissions) VALUES (N'test_user', ${hashedPassword}, N'ADMIN', N'test_user@example.com', N'Scope G')`;

    console.log('Test user created successfully');
    sql.close();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/oauth', oauthRoutes);
app.use('/secure', secureRoutes);

app.listen(3000, () => {
    console.log('OAuth server listening on port 3000');
});