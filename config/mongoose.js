const mongoose = require('mongoose');

mongoose
.connect('mongodb://127.0.0.1:27017/Tod')
.then(() => console.log("db connectionn is succesfull..."))
.catch((err)=>{
    console.log("error while connection to db",err);
    return;
});

const db = mongoose.connection;
db.on('err', console.error.bind(console,'something wrong in connection'));

db.once('open',()=>console.log(` db is connected`));

module.exports= db;

