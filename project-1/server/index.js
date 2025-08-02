const express = require ('express')
const app = express();
const dotenv = require('dotenv').config()

const port=8000;
app.listen(port,()=>console.log(`server is runing on port ${port}`))
