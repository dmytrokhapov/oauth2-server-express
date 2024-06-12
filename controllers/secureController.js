const secureController = {
    secure: async (req, res, next) => {
        try {
            // User is authenticated, token is valid
            // Return user information from the request
            const user = req.oauth.token.user;
            res.json({ user });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = secureController;