module.exports = () => {
    const dataFaculDB = require('../data.json');
    const controller = {};

    // Endpoint to filter data based on query parameter 'nome'
    controller.filterDataByName = (req, res) => {
        const { nome } = req.query;
        
        if (!nome) {
            return res.status(400).json({ error: 'Query parameter "nome" is required' });
        }
        
        const normalizedQuery = nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const regex = new RegExp(normalizedQuery, 'i');

        const filteredData = dataFaculDB.filter(item => {
            // Remove accents from item.nome and make it case-insensitive
            const normalizedNome = item.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return regex.test(normalizedNome);
        });
        
        if (filteredData.length === 0) {
            return res.status(404).json({ error: 'No matching data found' });
        }

        return res.status(200).json(filteredData);
    };

    return controller;
};
