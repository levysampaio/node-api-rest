module.exports = () => {
    const db = require('../data/db.js');
    const controller = {};
  

    controller.listResources = (req, res) => {
        let sql = "SELECT * FROM drivers JOIN vehicles ON drivers.id = vehicles.driverId "
        let params = []

        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows)
        });
    }

    return controller;
}