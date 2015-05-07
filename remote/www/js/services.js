angular.module('starter.services', [])



angular.module('starter.services', []).filter("hex", function() {
  return function(number) {
    if (number !== null && number !== undefined) {
      console.log(number.toString(16));
      var n = parseInt(number);
      return n.toString(16)

    }
  };
});
