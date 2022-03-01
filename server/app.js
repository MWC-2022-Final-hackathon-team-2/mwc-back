const corst = require("cors")
const express = require('express');
const { dbConection } = require('./src/db/config');
require('dotenv').config();
const router = require('./src/routes/company');
const app = express();
<<<<<<< HEAD
app.use(corst())
=======
require('./src/middlewares/cors')(app);
>>>>>>> 5c71eef2be663dc25bd09e3165f6dfd237382304
const port = process.env.PORT || 5000;

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