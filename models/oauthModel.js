const { sql } = require('../config/db');

module.exports = {
    getAccessToken: async (token) => {
        const result = await sql.query`SELECT * FROM oauth_tokens WHERE access_token = ${token}`;
        return result.recordset[0];
    },
    getClient: async (clientId, clientSecret) => {
        const result = await sql.query`SELECT * FROM oauth_clients WHERE client_id = ${clientId} AND client_secret = ${clientSecret}`;
        return result.recordset[0];
    },
    saveToken: async (token, client, user) => {
        await sql.query`INSERT INTO oauth_tokens (access_token, access_token_expires_on, client_id, user_id, scope) VALUES (${token.accessToken}, ${token.accessTokenExpiresAt}, ${client.clientId}, ${user.id}, ${token.scope})`;
        return {
            accessToken: token.accessToken,
            accessTokenExpiresAt: token.accessTokenExpiresAt,
            client: { id: client.clientId },
            user: { id: user.id }
        };
    },
    getUser: async (username, password) => {
        const result = await sql.query`SELECT * FROM oauth_users WHERE username = ${username} AND password = ${password}`;
        return result.recordset[0];
    }
};