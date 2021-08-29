module.exports = () => {
    const db = require('../data/db.js');
    const controller = {};
  
    controller.listResources = (req, res) => {
        const sql = "SELECT drivers.id, drivers.name, vehicles.plate, drivers.postalCode FROM drivers LEFT JOIN vehicles ON drivers.id = vehicles.driverId "
        const params = []

        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows)
        });
    }

    controller.insertResources = (req, res) => {
        const errors=[]
        if (!req.body.name){
            errors.push("No name specified");
        }  
        if (errors.length){
            res.status(400).json({"error":errors.join(",")});
            return;
        }
        const data = {
            name: req.body.name,
        }

        const sql ='INSERT INTO drivers (name) VALUES (?)'
        const params =[data.name]

        db.run(sql, params, function (err, result) {
            if (err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json({
                data
            })
        });
    }
    
    return controller;
}