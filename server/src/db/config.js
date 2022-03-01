const mongoose = require('mongoose');


const dbConection =  (url) => {
    mongoose.connect(url);
        console.log('Database online');
}


module.exports = {
    dbConection
}