'use strict';

describe('Service: myService', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var myService, httpBackend,  fakeDB=[{todo : "internship", todoDetails : "at 9H00"}];
  beforeEach(inject(function (_Myservice_, $httpBackend) {
    myService = _Myservice_;
    httpBackend = $httpBackend;
    $httpBackend.when('GET', '/todoList').respond(fakeDB);

    $httpBackend.whenPOST('/todoList').respond(function(method, url, data) {
      console.log('in POST method');
      var newTodo = angular.fromJson(data);
      fakeDB.push(newTodo);
      console.log('length of fakeDB : '+fakeDB.length);
      return [200, newTodo, {}];
    });
  }));




  it('should GET correctly data from server', function () {
    myService.infoTodoService().then(function(result){
      expect(result.length).toBe(1);
      expect(result).toEqual(fakeDB);
    });
    httpBackend.flush();
  });


  it('should POST correctly data into server', function () {
    myService.addTodoService('work', 'hard');
    myService.infoTodoService().then(function(result){
      expect(result.length).toBe(2);
    });
    httpBackend.flush();
  });


});

