'use strict';

/**
 * @ngdoc function
 * @name clientAppApp.controller:ShowtodoCtrl
 * @description
 * # ShowtodoCtrl
 * Controller of the clientAppApp
 */

angular.module('clientApp')
  .controller('MainCtrl', function ($scope, Myservice, $route) {
      $scope.showEdit=false;
      $scope.todos=[];

    /**
     * Save the init state of our form
     */

      var initForm = angular.copy($scope.userForm);


      Myservice.infoTodoService().then(function(promise)
      {
          $scope.todos = promise;
      });

      $scope.showAddForm=function()
      {
        $scope.showEdit=false;
      };

      $scope.addTodo=function() {
          // check to make sure the form is completely valid
            if($scope.userForm.$valid) {
                Myservice.addTodoService($scope.user.todo, $scope.user.todoDetails).then(function (promise) {
                    $scope.todos.push(promise);
                });
                $scope.user=angular.copy(initForm);
                $scope.userForm.$setPristine();
            }
      };

      $scope.showDetails=function()
      {
      	$scope.showInfo=true;
      };

      $scope.removeTodo=function(id)
      {
      	 Myservice.removeTodoService(id).then(function(){
             $route.reload();
         });
      };

      $scope.showEditForm=function(id, todo, $index)
      {
        $scope.user={'todo' : todo};
        $scope.idItem=id;
        $scope.index = $index;
        $scope.showEdit=true;
      };


    $scope.editTodoDetails=function(idItem, index)
    {
        if ($scope.userForm.$valid){
          Myservice.editTodoService(idItem, $scope.user.todoDetails).then(function(promise){
              var updatedObject = promise;
              $scope.todos[index]=updatedObject;
          });
            $scope.user=angular.copy(initForm);
            $scope.userForm.$setPristine();
        }


        /*
         I write this code in order to testify duplication using sonar-javaScript plugin
        */

       function test1(i) {

                if (i===1) {
                    return "one";
                }
                if (i===2) {
                    return "two";
                }
                if (i===3) {
                    return "tree";
                }
                if (i===4) {
                    return "four";
                }
                if (i===5) {
                    return "Five";
                }
                if (i===6) {
                    return "six";
                }
                if (i===7) {
                    return "seven";
                }
                 if (i===8) {
                    return "eight";
                }
                 if (i===9) {
                    return "nine";
                }
                return null;
       }

    };

  });
