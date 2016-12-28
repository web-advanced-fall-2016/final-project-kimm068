const express = require("express");
const http = require('http');
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const port = 8070;
const hostname = "localhost";
const dataFolder = './public/data/';
const io = require("socket.io").listen(server);

io.on('connection',function(websocket){
  console.log("New Client Got Connected!");
  let data = getAllImages();
  console.log(data);
  io.emit('images',data);
});
function getAllImages(){
  return fs.readdirSync(dataFolder).map((value,index)=> {
    return {src:`data/${value}`,id:index};
  });
}

app.use(express.static(__dirname + '/public'));

var count = 0;
var ard_value;

fs.readdir(dataFolder, function(err, files){
  files.forEach(function(file) {
    //console.log(file);
    count ++;
  });
});

//--------------------------arduino-----------------------------------------

// var prompt = require('prompt');
// var SerialPort = require("serialport");
// // var PythonShell = require('python-shell');
// var serial = new SerialPort("/dev/ttyACM0", {
//   baudRate: 9600,
//   parser: SerialPort.parsers.readline("\n")
// });
//
// prompt.start();
//
// serial.on('open', function() {
//
//   serial.on('data', function(data) {
//   // console.log((data));
//       var res = data.split(",");
//   console.log(res[0]);
//
//
//   if(parseInt(res[0])<=400){
//     var PythonShell = require('python-shell');
//        console.log("yes")
//
//         PythonShell.run('videoCam.py', function (err, results){
//         console.log('finished');
//       });
//     }
//   });
//
//   getinput();
//
// });
//
// function getinput(){
//   prompt.get(['enterCommand'], function (err, result) {
//   serial.write(result.enterCommand, function(err) {
//     if (err) {
//       return console.log('Error on write: ', err.message);
//     }
//       console.log("Command Entered from Terminal = "+result.enterCommand);
//       getinput();
//
//     });
//   });
// }
//
//
// function sendToserial(data){
//    //console.log("sending to serial: " + data);
//    if(ard_value == "capture"){
//        serial.write(ard_value);
//    }
//    port.write(data);
//
// }
//
// // open errors will be emitted as an error event
// serial.on('error', function(err) {
//   console.log('Error: ', err.message);
// });


//--------------- every socket on  & emit has to be written below -----------------------------------

//socket.io stuff
io.sockets.on('connection', function (socket) {

  socket.on('toArduino', function(data){
    console.log("you sent to Arduino");
    console.log(data.x);
    ard_value = data.x;
    sendToserial(data.x);
  });
  socket.emit('numOfImgs', count);
});

server.listen(port,hostname,function(){
  console.log('Simple static server listening at '+hostname+':'+port);
});



//-----------------------------------------
