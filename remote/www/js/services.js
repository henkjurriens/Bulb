angular.module('starter.services', [])



angular.module('starter.services', []).filter("hex", function() {
  return function(number) {
    if (number !== null && number !== undefined) {
      var g = parseInt(number)
      var text = g.toString(16);

      var host = "ws://localhost:5000";
      var ws = new WebSocket(host);

      ws.onopen = function () {
        ws.send(text + "0000");
      };

      var n = parseInt(number);
      return text;

    }
  };
});
