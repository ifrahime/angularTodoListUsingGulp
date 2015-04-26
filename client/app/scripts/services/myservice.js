'use strict';

/**
 * @ngdoc service
 * @name myTodoListAppApp.myService
 * @description
 * # myService
 * Service in the myTodoListAppApp.
 */
angular.module('clientApp')
  .service('Myservice', function ($q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.addTodoService=function(todo, todoDetails){
    	var jsonTodo={'todo' : todo, 'todoDetails' : todoDetails};
        // Make the request to the server ... which doesn't exist just yet

       return $http.post('/todoList', jsonTodo).then(function(response) {
                return response.data;
            });
    };

    /*
    Retrieve data from the server side memory
    deffered : allows to return data to the controler using promise
    */

    this.infoTodoService=function(){
       return $http.get('/todoList').then(function(response) {
                return response.data;
            });
    };

    this.removeTodoService=function(id){
        var jsonTodo={'id' : id};
        return $http.delete('/todoList?idTodo='+id).then(function(response){
                return response.data;
            });
    };

    this.editTodoService=function(id, todoDetails){
    	var jsonTodo={'id' : id, 'todoDetails' : todoDetails};
    	return $http.put('/todoList', jsonTodo).then(function(response)
        {
            return response.data;
        });
    };
  });
