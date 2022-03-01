const datos = require('../db/data.json');

const data = (req, res) => {
    res.status(200).json(datos);
};

module.exports = { data };