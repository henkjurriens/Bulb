angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

      var timeoutId;
      var red;

      $scope.$watch('red', function() {
            console.log('Has changed');

            if(timeoutId !== null) {
                console.log('Ignoring this movement');
                return;
            }

            console.log('Not going to ignore this one');
            timeoutId = $timeout( function() {

                console.log('It changed recently!');

                $timeout.cancel(timeoutId);
                timeoutId = null;

                // Now load data from server
            }, 1000);

        });




});
