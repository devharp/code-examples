require('dotenv').config()
const sql = require('sqlite3').verbose();


// sql.OPEN_READONLY: open the database for read-only.
// sql.OPEN_READWRITE : open the database for reading and writting.
// sql.OPEN_CREATE: open the database, if the database does not exist, create a new database.


let db = new sql.Database(process.env.DBSRC, sql.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Some Error occurred: ', err.message);
    }

    console.log('Connected to the database');

    db.each('select * from pages', (err, row) => {
        console.log(row);
    });


    db.close(err => {
        if (err) {
            console.error(err.message);
        }
        console.log('Database connection closed.');
    });
});


