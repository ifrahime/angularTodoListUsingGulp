/**
 * Created by swgp8054 on 09/04/2015.
 */

var assert = chai.assert,
    expect = chai.expect;

describe('Test controller that called service infoTodo using Sinon.js', function() {
    beforeEach(module('clientApp'));

    var MainCtrl, scope, q, deffered, fakeDB = [{todo: 'sayHi', todoDetails: 'Hi'}], serviceStub;

// Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$q_) {
        scope = $rootScope.$new();
        q = _$q_;
        deffered = q.defer();
        serviceStub = sinon.stub({
            infoTodoService: function () {
            }
        });
        serviceStub.infoTodoService.returns(deffered.promise);

        MainCtrl = $controller('MainCtrl', {
            '$scope': scope,
            Myservice: serviceStub
        });

        deffered.resolve(fakeDB);
        scope.$digest();
    }));

    it('Should return faked data', function(){
        expect(scope.todos).to.have.length(1);
        expect(scope.todos).to.be.eql(fakeDB);
    });

});


