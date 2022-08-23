const express = require('express');
const cors = require('cors');
require('./config/db');

// Custom package
const apiRoute = require('./routes/api.route');

// Dependencies
const app = express();
app.use(cors());
app.use(express.static(__dirname + 'public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/./views/index.html")
})

app.use("/api",apiRoute);

app.use((req,res)=>{
    res.status(404);
    res.sendFile(__dirname+"/./views/routeError.html")
})

module.exports = app;