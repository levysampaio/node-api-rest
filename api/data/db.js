const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }

    
    console.log('Connected to the in-memory SQlite database.');

    db.serialize(function () {
        db.run("CREATE TABLE drivers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, postalCode TEXT)");

        db.run("CREATE TABLE vehicles (id INTEGER PRIMARY KEY AUTOINCREMENT, plate TEXT, driverId INTEGER NOT NULL, FOREIGN KEY (driverId) REFERENCES drivers (id))");
        
        db.run("INSERT INTO drivers VALUES (null, 'Motorista 1', '80010-180'), (null, 'Motorista 2', '99999-999') ");
        db.run("INSERT INTO vehicles VALUES (null, 'ABC-1234', '1'), (null, 'ZZZ-0000', '1')");
    });

    
});
module.exports = db;


