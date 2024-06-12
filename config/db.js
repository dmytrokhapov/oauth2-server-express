const sql = require('mssql');

const dbConfig = {
    user: 'oauth',
    password: '123123',
    server: '(LocalDb)\MSSQLLocalDB',
    database: 'oauth',
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
    port: 1433,
};


const connectDB = async () => {
    try {
        await sql.connect(dbConfig);
        console.log('Connected to the database!');
    } catch (err) {
        console.error('Error connecting to the database: ', err);
    }
};

module.exports = {
    sql,
    connectDB
};