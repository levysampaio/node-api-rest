module.exports = app => {
    const controller = require('../controllers/resources')();
  
    app.route('/drivers')
      .get(controller.listResources)
      .post(controller.insertResources);
    
}