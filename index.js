const express = require('express');
const port = 8000;
const app = express();
const db= require('./config/mongoose');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){
        console.log(`error in running the express, ${err}`);
        return;
    }

    console.log(`express server is up and running on port, ${port}`);
})