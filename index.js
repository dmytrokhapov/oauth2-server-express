const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { sql, connectDB } = require('./config/db');
const oauthRoutes = require('./routes/oauth');
const secureRoutes = require('./routes/secure');

const app = express();

(async () => {
    try {
        await connectDB();

        const hashedPassword = await bcrypt.hash('test_password', 10);
        
        await sql.query`INSERT INTO oauth_clients (client_id, client_secret, redirect_uris, grant_types, scope)
                        VALUES ('test_client', 'test_secret', 'http://localhost:8000/oauth/callback', 'password', 'read write')`;

        await sql.query`INSERT INTO oauth_users (username, password, role, email, permissions)
                        VALUES (N'test_user', ${hashedPassword}, N'ADMIN', N'test_user@example.com', N'Scope G')`;
        
        console.log('Test client and user created successfully');
    } catch (err) {
        console.error('Error creating test client and user:', err);
    } finally {
        sql.close();
    }
})();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/oauth', oauthRoutes);
app.use('/secure', secureRoutes);

app.listen(3000, () => {
    console.log('OAuth server listening on port 3000');
});