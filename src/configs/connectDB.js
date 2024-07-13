// Get the client
import mysql from 'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
});


// connection.query(
//     'SELECT * FROM `users`',
//     function (err, results, fields) {
//         console.log('>>> check query');

//         let rows = results.map((item) => item.firstName)
//         console.log(rows)
//     }
// );

export default connection;

