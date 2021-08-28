module.exports = app => {
    const controller = require('../controllers/resource')();
  
    app.route('/drivers')
      .get(controller.listResources)
      .post(controller.insertResources);
    
}