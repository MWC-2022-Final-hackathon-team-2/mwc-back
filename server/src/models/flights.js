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
    },
    destinationContinent:{
        type:String,
        required:true,
    },
    destinationCountry:{
        type:String,
        required:true
    },
    seats:{
        type:Number,
        max:230
    }
})

module.exports = mongoose.model('flight', flightSchema)