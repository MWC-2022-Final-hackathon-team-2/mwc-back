const mongoose = require('mongoose');



const flightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    totalFlights: {
        type: Number,
        default: 0
    },
    totalSeats: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('company', flightSchema)