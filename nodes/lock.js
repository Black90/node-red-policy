var application_root = __dirname,
    express = require("express"),
    cors = require("cors"),
    path = require("path");

    var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var app = express.createServer();
app.use(cors());
// Database


// Config

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});



app.get('/api', function (req, res) {
	var output;
  var circle = require('./circle');
console.log( 'The area of a circle of radius 4 is '+ circle.area(4));
  
MongoClient.connect('mongodb://127.0.0.1:27017/raouf', function(err, db) {
    if(err) throw err;

        var collection = db.collection('testData');

 collection.find().toArray(function(err, results) {
    if(results != null)                    
         {
        console.log(Array.isArray(results));
        console.dir(results.length);
                output = results[8];
                console.log(Array.isArray(output));
                console.dir(output.length);
                res.send(output);
                
    }
    else { console.log("results are empty");}
           
    });

 
});
 console.log(output);
 
  console.log("sending from API ");
});










app.get('/list', function (req, res) {
  var output ;
MongoClient.connect('mongodb://127.0.0.1:27017/raouf', function(err, db) {
    if(err) throw err;

    var collection = db.collection('testData');
    collection.find().toArray(function(err, results) {
    if(results != null)                    
         {
      
         for (var i = 0; i < results.length; i++) {
                     if (typeof results[i] === "object" ) {
                              //console.log(Object.getOwnPropertyNames(results[i].args)); 
                            // console.log(results[i].args);
                             
                             output = results[1];
                             // console.log(output);
                             if (typeof results[i].args === "object" ) {
                              //console.log(Object.getOwnPropertyNames(results[i].args)); 
                             // console.log("args is an object");
                             // console.log(results[i]._id);
                      }
                             // console.log(results[i]._id);
                      }
   
         } 
         // console.log(results);
         res.send(results);
         // res.send(output);
    }
    else { console.log(" results are empty");}
           
    });

});

// res.send(output);
 console.log("sending from list");
});



app.get('/user', function (req, res) {

  var exec = require('child_process').exec, child;
     var command = 'curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json;charset=UTF-8" -X GET http://132.231.11.217:8080/idm/user/'+req.query.user ;
     // var command = 'curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json;charset=UTF-8" -X GET http://132.231.11.217:8080/idm/user/a7980026-a6c8-4e61-a78a-4a259e929171' ;
     child = exec(command,
      function (error, stdout, stderr){
      console.log(req.query.user);
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      res.send(stdout);
      if(error !== null){
      console.log('exec error: ' + error);
    }});

console.log("called jar methods");
});
var gp_list =" " ; var ids = new Array();


app.get('/jar', function (req, res) {

  var exec = require('child_process').exec, child;
     
      child = exec('/usr/bin/java -cp /root/Home/Git/policy_node-red/extension/Json2BP-1.0-SNAPSHOT-jar-with-dependencies.jar com.mycompany.json2bp.MainClass  /root/Home/Git/policy_node-red/flows_localhost.json',
    
      function (error, stdout, stderr){

      res.send(stdout);
      if(error !== null){
      console.log('exec error: ' + error);
    }});
});



app.get('/groups', function (req, res) {

  var exec = require('child_process').exec, child;
   var t = 0;
  // while (t != 0 && stdout != "" ) {
 

     var command = 'curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json;charset=UTF-8"  http://132.231.11.217:8080/idm/group/?page='+ req.query.pagenbr ;
     
     child = exec(command,
      function (error, stdout, stderr){
          gp_list = stdout;
       console.log('stdout: ' + stdout);
      // console.log('stderr: ' + stderr);
       var gps = JSON.parse(gp_list);
          for (var i = 0; i < gps.length; i++) {
             ids[i]= gps[i].id;
          };
           // console.log(ids.length);
      res.send(stdout);
      if(error !== null){
      console.log('exec error: ' + error);
       }
  });
  

});




app.get('/groupsAttributes', function (req, res) {

  var exec = require('child_process').exec, child;
   // console.log(ids.length);
   // console.log(ids[0]);
   // console.log("this is the argument tha we got back from the get the request");
   // console.log(req.query.nbr);
   // console.log(ids[req.query.nbr]);
     var command = 'curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json;charset=UTF-8" http://132.231.11.217:8080/idm/group_attributes/'+ ids[req.query.nbr]+'/' ;
     
     child = exec(command,
      function (error, stdout, stderr){
      // console.log('stdout: ' + stdout);
      // console.log('stderr: ' + stderr);
      res.send(stdout);
      if(error !== null){
      console.log('exec error: ' + error);
    }});
});








// Launch server

app.listen(4242);