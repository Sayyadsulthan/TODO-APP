
// module.exports.todo = function(req, res){
//     console.log("fetch data",req.body);
//     return res.redirect('back');
// }

const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    description:{
        type:'String',
        required: true
    },
    category:{
        type:'string'
    },
    date:{
        type:'string'
    },
    checked:{
        type: Boolean   
    }
})

const Todolist = mongoose.model('Todolist',todoSchema);

module.exports =Todolist;