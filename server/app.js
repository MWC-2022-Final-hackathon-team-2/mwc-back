const express = require('express');
const cors = require('cors');
const { dbConection } = require('./src/db/config');
require('dotenv').config();
const router = require('./src/routes/company');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use('/api/v1', router)

app.get('/', (req, res) => {
    res.send('entro')
});



const start = async () => {
    try {
        const connect = process.env.DB_URI
        await dbConection(connect)
        app.listen(port, () => console.log(`Listenner on port ${port}`));
    } catch (error) {
        console.log(error)
    }

};

start();