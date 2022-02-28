const company = require("../models/company");

const companyGet = (req, res) => {
    res.json({
        msg: "Estoy aqui",
    });
};

const companyPost = (req, res) => {
    const datos = req.body;
    console.log(datos);
    // await company.create()
    res.json(datos);
};
module.exports = {
    companyGet,
    companyPost,
};
