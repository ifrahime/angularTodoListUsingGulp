/**
 * Created by SWGP8054 on 23/03/2015.
 */

var mongoose = require('mongoose');
var todoListModel = require('./schemas/todoList');


// get an instance of our connection to our database
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/todos');
// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));
// Open the connection
db.once('open', function callback () {
    console.log('Database Connection Successfully Opened at ' + db);
});

exports.todoList = todoListModel;