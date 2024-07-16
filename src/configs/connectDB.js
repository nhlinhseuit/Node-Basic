// Get the client
import mysql from 'mysql2/promise';
require('dotenv').config()
// // Create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodejsbasic',
// });

const pool = mysql.createPool({
    // mysql database XAMPP

    // host: 'localhost',
    // user: 'root',
    // database: 'nodejsbasic', 

    // mysql database Docker
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, // default: 3306
})


export default pool;

