const company = require("../models/company");

const companyGet = async (req, res) => {
    const datos = await company.find({})
    res.json({datos});
};

const companyPost = async (req, res) => {
    await company.create(req.body)
    res.json(datos);
};

module.exports = {
    companyGet,
    companyPost,
};
