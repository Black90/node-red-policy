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



   
MongoClient.connect('mongodb://127.0.0.1:27017/raouf', function(err, db) {
    if(err) throw err;

        var collection = db.collection('testData');
        //    collection.count(function(err, count) {
        //     console.log(format("count = %s", count));
        //      lengh = count;
            
              
        // });

 collection.find().toArray(function(err, results) {
    if(results != null)                    
         {
        //console.dir(results);
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
	// var obj = { "name" : "aze" };
	//res.setHeader('Content-Type', 'application/json');
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



app.get('/jar', function (req, res) {

  var exec = require('child_process').exec, child;
     
     child = exec('/usr/bin/java -cp /root/Home/Git/policy_node-red/extension/Json2BP-1.0-SNAPSHOT-jar-with-dependencies.jar com.mycompany.json2bp.MainClass  /root/Home/Git/policy_node-red/flows_localhost.json',
      function (error, stdout, stderr){
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      res.send(stdout);
      if(error !== null){
      console.log('exec error: ' + error);
    }});
});












// Launch server

app.listen(4242);