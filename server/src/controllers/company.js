const company = require("../models/company");

const companyGet = async (req, res) => {
    try {
        const datos = await company.find({});
        res.status(200).json({ datos });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const companyPost = async (req, res) => {
    try {
        const datos = await company.create(req.body);
        res.json({ datos });
    } catch (error) {
        res.json({ error: error });
    }
};

const companyGetId = async (req, res) => {
    const { id } = req.params;

    try {
        const datos = await company.findOne({ id: id });
        res.json({ datos });
    } catch (error) {
        res.json({ error: error });
    }
};
const companyPatch = async (req, res) => {
    const { id } = req.params;

    try {
        const datos = await company.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        res.json({ datos });
    } catch (error) {
        console.log(error);
        res.json({ error: error });
    }
};

const companyDel = async (req, res) => {
    const { id } = req.params;
    try {
        const datos = await company.findByIdAndDelete(id);
        res.json({ datos });
    } catch (error) {
        res.json({ error: error });
    }
};

module.exports = {
    companyGet,
    companyPost,
    companyPatch,
    companyDel,
    companyGetId,
};
