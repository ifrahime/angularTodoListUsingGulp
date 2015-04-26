

/**
 * Created by SWGP8054 on 24/03/2015.
 */


casper.test.begin('Description of my first test', 1, function(test) {
    casper.start('http://localhost:3000', function() {
         test.assertTitle('AngularTodoApp', 'my application has the correct title');
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Description of my second test', 2, function(test) {
casper.options.viewportSize = {width: 1400, height: 1000};
    casper.start('http://localhost:3000', function () {
        casper.capture("beforeAddTodo.png");
        this.fill('form#userForm', {
            'todo': 'Gym',
            'todoDetails': '19H00'
        }, true);
       casper.then(function () {
            this.click("#addTodo");
        });
        casper.then(function(){
            this.capture("afterAddTodo.png");
        });
    }).run(function(){
        test.done();
    });
});



