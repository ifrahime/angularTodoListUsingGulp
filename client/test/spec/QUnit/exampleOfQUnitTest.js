/**
 * Created by swgp8054 on 13/04/2015.
 */

'use strict';

var injector, scope, myservice, fakeDB=[{'todo' : 'test1', 'todoDetails' : 'at 12H40'}], fakeServer;


module('Service test',{
    setup: function() {
        injector = angular.injector(['ng', 'clientApp']);
        myservice = injector.get('Myservice');
        fakeServer = sinon.fakeServer.create();
        fakeServer.respondWith('GET', '/todoList', [200, {"Content-Type": "application/json"}, JSON.stringify(fakeDB)]);
        fakeServer.autoRespond = true;
    },
    teardown: function(){
        fakeServer.restore();
    }
});

asyncTest('test if service infoTodo get data from my fakeServer using Sinon.js',function(){
        myservice.infoTodoService().then(function(promise){
            start();
            console.log('data received is : '+JSON.stringify(promise));
            propEqual(promise, fakeDB);
        });
});



