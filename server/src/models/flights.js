const mongoose = require('mongoose');



const flightSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    originCountry: {
        type: String,
        required:true
    },
    originContinent: {
        type: String,
        required:true,
        enum : ["EUROPE","ASIA","OCEANIA","AMERICA","ANTARTIDA","AFRICA"]
    },
    destinationContinent:{
        type:String,
        required:true,
        enum : ["EUROPE","ASIA","OCEANIA","AMERICA","ANTARTIDA","AFRICA"]
    },
    destinationCountry:{
        type:String,
        required:true
    },
    Seats:{
        type:Number,
        max:3
    }
})

module.exports = mongoose.model('flight', flightSchema)