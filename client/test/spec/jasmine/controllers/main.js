'use strict';


describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MainCtrl,scope, fakeService, q, deferred, exampleOfData = [], userForm;


  // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$q_, $compile) {
        scope = $rootScope.$new();
        q=_$q_;
        deferred = q.defer();
        var elem = angular.element(
            '<form name="userForm">' +
            '<input ng-model="user.todo" name="todo" required/>' +
            '<input ng-model="user.todoDetails" name="todoDetails" required/>' +
            '</form>'
        );
        scope.user = {todo : null, todoDetails : null};
        $compile(elem)(scope);
        fakeService= {
            infoTodoService: function () {
                console.log('I am in faked service');
                // Place the fake return object here
                deferred.resolve(exampleOfData);
                return deferred.promise;
            },
            addTodoService : function(a, b)
            {
                var jsonObj = {'todo' : a, 'todoDetails' : b};
                console.log('I am in addTodoService');
                exampleOfData.push(jsonObj);
                deferred.resolve(jsonObj);
                return deferred.promise;
            }
        };
        spyOn(fakeService, 'infoTodoService').and.callThrough();
        spyOn(fakeService, 'addTodoService').and.callThrough(scope.todo, scope.todoDetails);

    MainCtrl = $controller('MainCtrl', {
      '$scope': scope,
        Myservice : fakeService
    });
        userForm = scope.userForm;
  }));


    it('infoTodoService should be called when we go to home page', function () {
        expect(fakeService.infoTodoService).toHaveBeenCalled();
    });


  it('Should GET correctly data from infoTodoService', function(){
      //scope.$digest();
      expect(scope.todos.length).toBe(0);
  });


    it('Should ADD correctly data', function(){
        userForm.todo.$setViewValue('todo');
        userForm.todoDetails.$setViewValue('todoDetails');
        expect(userForm.$valid).toBeTruthy();
        scope.addTodo();
        scope.$digest();
        expect(fakeService.addTodoService).toHaveBeenCalled();
        expect(scope.todos).toEqual(exampleOfData);
    });

});
