const express = require('express');
const app = express();

//allow cors
const cors = require('cors');
require('dotenv').config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//routers
const { songRouter } = require('./routes/songRouter');

app.use('/song',songRouter);

//listen for requests
app.listen(process.env.port,() => {
    console.log(`listening for requests on port : ${process.env.port}`)
});