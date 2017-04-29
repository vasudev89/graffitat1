var express = require('express')
var app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://vasudev:godfather1989@ds121091.mlab.com:21091/imaginarium';
// Use connect method to connect to the Server

var dbRef = undefined;
var greenhorns = undefined;
var mentors = undefined;

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to Mongo server");
 
  dbRef = db;
  greenhorns = dbRef.collection('greenhorns');
  mentors = dbRef.collection('mentors');
});

app.use(express.static('public'))

app.get('/head-meta', function (req, res){ res.sendFile( __dirname + "/public/headerfiles/head-meta.html" ); });
// app.get('/app.js', function (req, res){ res.sendFile( __dirname + "/public/app.js" ); });
app.get('/home', function (req, res){ res.sendFile( __dirname + "/home.html" ); });

app.get('/', function (req, res) {

	// greenhorns.insertMany([
 //    {a : 1}, {a : 2}, {a : 3}
 //  ], function(err, result) {
 //    assert.equal(err, null);
 //    assert.equal(3, result.result.n);
 //    assert.equal(3, result.ops.length);
 //    console.log("Inserted 3 documents into the document collection");
 //    //callback(result);
 //  });

  res.sendFile(__dirname + '/index.html')
})

app.post('/greenhornSignup', function (req, res){

	console.log( '/greenhornSignup' );

	console.log( req.body );
	
  try
  {
    greenhorns.find({"Email": req.body.Email}).toArray(function(err, docs) {
      assert.equal(err, null);
      
      if( docs.length != 0 )
        res.send( {message:"Email In Use"} );
      else
      {
        mentors.find({"Email": req.body.Email}).toArray(function(err, docs) {
          assert.equal(err, null);
          
          if( docs.length != 0 )
            res.send( {message:"Email In Use"} );
          else
          {
            greenhorns.insert(req.body);
            res.send( {message:"Greenhorn Signup Successful"} );
          }
        });
      }
    });
    
  }
  catch(e)
  {
    console.log(e);

    res.send( {message:"Greenhorn Signup Failure"} );
  }
 
});

app.post('/mentorSignup', function (req, res){

  console.log( '/mentorSignup' );

  console.log( req.body );
  
  try
  {
    greenhorns.find({"Email": req.body.Email}).toArray(function(err, docs) {
      assert.equal(err, null);
      
      if( docs.length != 0 )
        res.send( {message:"Email In Use"} );
      else
      {
        mentors.find({"Email": req.body.Email}).toArray(function(err, docs) {
          assert.equal(err, null);
          
          if( docs.length != 0 )
            res.send( {message:"Email In Use"} );
          else
          {
            mentors.insert(req.body);
            res.send( {message:"Mentor Signup Successful"} );
          }
        });
      }
    });
  }
  catch(e)
  {
    console.log(e);

    res.send( {message:"Mentor Signup Failure"} );
  }
 
});

app.post('/attemptLogin', function (req, res){

  console.log( '/attemptLogin' );

  console.log( req.body );
  
  var respJSON;

  try
  {
    greenhorns.find({"Email": req.body.Email,"Password":req.body.Password}).toArray(function(err, docs) {
      assert.equal(err, null);
      
      if( docs.length != 0 )
      {
        respJSON = {message:"Login Successful",Email:req.body.Email,"Type":"Greenhorn"};
        res.send( respJSON );
      }
      else
      {
        mentors.find({"Email": req.body.Email,"Password":req.body.Password}).toArray(function(err, docs) {
          assert.equal(err, null);
          
          if( docs.length != 0 )
          {
            respJSON = {message:"Login Successful",Email:req.body.Email,"Type":"Mentor"};
            res.send( respJSON );
          }
          else
          {
            res.send( {message:"Invalid Credentials"} );
          }
        });
      }
    });
  }
  catch(e)
  {
    console.log(e);

    res.send( {message:"Something Went Wrong"} );
  }
 
});

var port = process.env.PORT || 8874;

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})