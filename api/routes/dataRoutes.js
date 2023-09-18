module.exports = app => {
    const controller = require('../controller/data')();
    
    /*app.route('/api/v1/faculdades')
        .get(controller.listDataFacul);*/

    // Add a new route to filter data by 'nome' query parameter
    app.route('/api/v1/faculdades')
        .get(controller.filterDataByName); // Use this endpoint to filter by 'nome'
};
