// var data = [
//     {
//         description:"go to gym",
//         category: "personal",
//         date: "12/23/2023"
//     },
//     {
//         description:"go to school",
//         category: "personal",
//         date: "10/20/2023"
//     }

// ]
const todolist= require('../model/todo');

module.exports.home = async function (req, res) {

    let response = req.path;
    todolist.find({})
    .then((data)=>{
        // console.log(data);
        return res.render('home',{
            todo_data: data });
    })
    .catch((err)=>{
        console.log(":::::",err);
    })

 
}

//this need to be in todo_controller
module.exports.todo = function(req, res){

    console.log("fetch data",req.body);

    if(req.body.date=== ''){
        req.body.date= "NO DEADLINE";
    }

    todolist.create({
        description: req.body.description,
        date: req.body.date,
        category: req.body.category,
        checked: req.body.checked

    })
    .then((data)=> {
        console.log('***',data);
        return res.redirect("back");
    })
    .catch((err)=>{
        console.log(`error while creating data, ${err} `);
    })
    // return res.redirect('back');
};

module.exports.deleteTodo = function(req, res){

    console.log(req.query);
    let obj= req.query;

    for(i in obj){
        console.log(i);
        deleteitems(i); 
    }
    
    function deleteitems(_id){
        todolist.findByIdAndDelete(_id)
        .then((data)=>{  console.log('deleted todo_list successfully:', data);})
        .catch((err)=>{
             console.log(`cannot delete, ${err}`); 
        });
    }
    setTimeout(function(){
        return res.redirect('back');
    },1000);
}