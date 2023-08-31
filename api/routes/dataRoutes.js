module.exports = app => {
    const controller = require('../controller/data')();
    
    app.route('/api/v1/faculdades')
        .get(controller.listDataFacul)
}