angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

      var timeoutId;
      var red = 0;
      var green = 0;
      var blue = 0;

      console.log('init');
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

        $scope.getRandomColor = function() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        $scope.sendMessage = function() {
          console.log('message');
          //var host = location.origin.replace(/^http/, 'ws');
          var host = "ws://localhost:5000";
          var ws = new WebSocket(host);

          ws.onopen = function () {
            ws.send($scope.getRandomColor());
          };


        }




});
