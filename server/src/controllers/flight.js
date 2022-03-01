const flight = require("../models/flights");
const company = require("../models/company");

const flightGet = async (req, res) => {
    try {
        const datos = await flight.find({});
        res.status(200).json({ datos });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const flightGetId = async (req, res) => {
    const { id } = req.params;

    try {
        const datos = await flight.findOne({ id: id });
        res.json({ datos });

    } catch (error) {
        res.json({ error: "error" });
    }
};

const flightPost = async (req, res) => {
    try {
        const numBseats = req.body.seats;
        const company= req.body.company;
        const datos = await flight.create(req.body);
        const datosCompany = await company.findOne({
            company: company 
        });
        //total seats
        const totalSum = datosCompany.totalFlights + 1;
        const totalSeats = datosCompany.totalSeats + numBseats;

        await company.findOneAndUpdate(
            { company: company },
            {
                totalFlights: totalSum,
                totalSeats: totalSeats,
            }
        );
        res.json({datos});
    } catch (error) {
        res.json({ error: error });
    }
};

const flightPatch = async (req, res) => {
    const { id } = req.params;

    try {
        const datos = await flight.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        res.json({ datos });
    } catch (error) {
        console.log(error);
        res.json({ error: error });
    }
};

const flightDel = async (req, res) => {
    const { id } = req.params;
    try {
        const datos = await flight.findByIdAndDelete(id);
        const numBseats = req.body.seats;
        const company = req.body.company;
        
        // const company= req.body.company;
        // // const datos = await flight.create(req.body);
        const datosCompany = await company.findOne({
            company: company 
        });
        // //total seats
        const totalRes = datosCompany.totalFlights - 1;
        const totalSeats = datosCompany.totalSeats - numBseats;
        
        await company.findOneAndUpdate(
            { name: company },
            {
                totalFlights: totalRes,
                totalSeats: totalSeats,
            }
        );
        res.end();
    } catch (error) {
        res.json({ error: error });
    }
};


module.exports = {
    flightGet,
    flightGetId,
    flightPost,
    flightPatch,
    flightDel,
};
