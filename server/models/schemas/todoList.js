/**
 * Created by SWGP8054 on 23/03/2015.
 */


var mongoose = require('mongoose');

//Create schema of todoList
var todoListSchema = new mongoose.Schema({

    todo : {
        type : String,
        required : true
    },
    todoDetails : {
        type : String,
        required : true
    }

});


var todoList = mongoose.model('todoList', todoListSchema);



//Export the model schema
module.exports = todoList;