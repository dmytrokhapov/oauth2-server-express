const sql = require('mssql');

const dbConfig = {
    server: "ll-replicas.database.windows.net",
    user: "DLPAdmin2",
    password: "!Upwork2024",
    database: "LLReplica_DLP1",
    port: 1433,
    authentication: {
      type: "default",
    },
    options: {
      encrypt: true,
    },
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