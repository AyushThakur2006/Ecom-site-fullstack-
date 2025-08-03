const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cookie= require('cookie-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
//database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DATABASE CONNECTED'))
    .catch((err) => {
        console.log('Database Not Connected', err)
    })

    //middleware
    app.use(express.json())
    app.use('/', (require('./routes/authRoutes')))
    app.use(cookieParser());
    app.use(authRoutes)
    app.use(express.urlencoded({extended:false}))


const port = 8000;
app.listen(port, () => console.log(`server is runing on port ${port}`))
