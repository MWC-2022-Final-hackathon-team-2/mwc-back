const flight = require("../models/flights")
const company = require("../models/company");


const flightGet = async (req, res) => {
    try {
        const datos = await flight.find({});
        res.status(200).json({ datos });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const flightPost = async (req, res) => {
    try {
        // const datos = await flight.create(req.body);
        const datosCompany= await company.findOne({name: "ryanair"})
        const totalSum = datosCompany.totalFlights + 1
        await company.findOneAndUpdate({name:"ryanair"},{totalFlights: totalSum})
        // await company.findByIdAndUpdate(akjsdhaj, {totalFlights: totalSum})
        res.json({probando:"sum"});
    } catch (error) {
        res.json({ error: error });
    }
};

const flightPatch = async (req, res) => {
    const { id } = req.params;
    
    try {
        const datos = await flight.findByIdAndUpdate(id, req.body,  {
            new:true,
            runValidators:true
        })
        res.json({datos});
    } catch (error) {
        console.log(error);
        res.json({ error: error });
    }
};

const flightDel = async (req,res)=>{
    const {id} = req.params
    try {
        const datos = await flight.findByIdAndDelete(id)
        res.json({datos})
    } catch (error) {
        res.json({error:error})
    }
}


module.exports = {
    flightGet,
    flightPost,
    flightPatch,
    flightDel
};
