'use strict';

/**
 * @ngdoc function
 * @name myTodoListAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myTodoListAppApp
 */
angular.module('clientApp')
  .controller('AboutCtrl', function () {
  	  function test2(i) {
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
  });
