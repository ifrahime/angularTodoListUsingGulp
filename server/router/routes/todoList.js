// Include Express
var express = require('express');
// Initialize the Router
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
var db = require('../../models');
var todo = db.todoList;

// Setup the Route
router.get('/', function (req, res) {
    todo.find(function(err, list) {
        if (err) return console.error(err);
        res.json(list);
    });

});

router.post('/', function (req, res) {
    console.log('****** POST METHOD ************');
    var body = req.body;
	console.log("I am in post route");

    var newTodo = new todo({
        todo : body.todo,
        todoDetails : body.todoDetails
    });
      newTodo.save(function(err, newTodo) {
          if (err) return console.error(err);
          console.dir(newTodo);
          res.json(newTodo);
      });


});

router.put('/', function(req, res){
	 var element = req.body;
    console.log("userToUpdate : "+element.id);
    var objectId = new ObjectID(element.id);
    todo.findOneAndUpdate({'_id' : objectId},  { $set: { 'todoDetails': element.todoDetails}}, function(err, elemUpdated){
        res.send(elemUpdated);
    });
});


router.delete('/', function(req, res)
{
    var element={'_id' : new ObjectID(req.param('idTodo'))};
    console.log("idTodo is : "+JSON.stringify(element));
    todo.findOneAndRemove(element, function(err, elemRemoved){
        if (err) return console.error(err);
        res.send(elemRemoved);
    });
});

// Expose the module
module.exports = router;