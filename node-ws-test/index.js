var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var color = "#00ff00";

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {


  ws.onmessage = function (event) {
    console.log("received " + event.data);
    color = event.data;
  };


  var id = setInterval(function() {
    ws.send(JSON.stringify( color), function() {  })
  }, 1000)


  console.log("websocket connection open1")

  ws.on("close", function() {
    console.log("websocket connection close")
    clearInterval(id)
  })
})

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
