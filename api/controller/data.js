module.exports = () => {
    const dataFaculDB = require('../data.json');
    const controller = {};

    controller.listDataFacul = (req, res) => res.status(200).json(dataFaculDB)

    return controller
}