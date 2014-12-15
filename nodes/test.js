module.exports = function(RED) {
  var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
 
  var Locks = new Array(); 
    function TestNode(n) {
        RED.nodes.createNode(this,n);
       //is.client= new MongoClient("localhost", 27017);
        this.coll = n.coll;
        this.jump = true;
      //  this.Policy = n.Policy;
        this.topic = n.topic;
       this.mongodb = n.mongodb;
        this.field3 = n.field3;
        var node = this;
console.log("cheking if node is an object or not");
 

 ///////////////////////////////////////////////////////////////////////////////////////exec

// var exec = require('child_process').exec, child;
//       // child = exec('/usr/bin/java -cp /root/Downloads/work/hello.jar Hello',
//       child = exec('/usr/bin/java -cp /root/Downloads/work/hello.jar Hello',
//       function (error, stdout, stderr){
//       console.log('stdout: ' + stdout);
//       console.log('stderr: ' + stderr);
//       if(error !== null){
//       console.log('exec error: ' + error);
//     }});


var object = node.wires;
console.log(Object.getOwnPropertyNames(object[0]));
var obj = object[0];
console.log(Object.getOwnPropertyNames(obj));

console.log( typeof object[0]  === "object");




var configNode = RED.nodes.getNodeList();


 if (typeof configNode === "object" ) { 
 
}
var flow = RED.nodes.getFlows();


this.on('input', function(msg) {
               
 
  var res = msg.payload.concat(this.field1,this.field2,this.topic);
            msg.payload = res;
            node.send(msg);
     
        }
);
    }
    RED.nodes.registerType("test",TestNode);
}
