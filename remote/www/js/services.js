angular.module('starter.services', [])


angular.module('starter.services', []).filter("hex", function() {
  return function(number, color) {
    if (number !== null && number !== undefined) {
      var g = parseInt(number)
      var text = g.toString(16);

      if (color ===  'red') {
        localStorage.setItem("red", text);
      }

      if (color ===  'green') {
        localStorage.setItem("green", text);
      }

      if (color ===  'blue') {
        localStorage.setItem("blue", text);
      }

      var rgb = localStorage.getItem("red") + localStorage.getItem("green") + localStorage.getItem("blue");

      var host = "ws://localhost:5000";
      var ws = new WebSocket(host);

      ws.onopen = function () {
        console.log( "app :" + rgb);
        ws.send(rgb);
      };

      var n = parseInt(number);
      return text;

    }
  };
});
