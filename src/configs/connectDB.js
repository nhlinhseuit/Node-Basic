// Get the client
import mysql from 'mysql2/promise';

// // Create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodejsbasic',
// });

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3307, // default: 3306
    database: 'hoidanit',
})


export default pool;

