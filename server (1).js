var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var project;

var courses = ['skiing'];

if(process.argv.length == 2){
    console.error('Expected project name!');
    process.exit(1);
} else {
    project = process.argv[2];
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/' + project));

//app.set('/'+project, express.static(__dirname + '/'+project));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/'+project+'/index.html');
});

app.get('/hello', function(req, res){
  console.log('hello!');
  res.sendStatus(200);
});

app.get('/registered', function(req, res){
  console.log('GET registered courses');
  res.json({
    registered: courses
  });
});

app.post('/register', function(req, res){
  console.log('POST registered courses');

  // get name of course, and grade
  var body = req.body;

  console.log(body);

  // create object thst has keys 'name' and 'grade' with the correspondibg data
  // add this object to the list

  courses.push(body.course);

  console.log(courses);

  res.sendStatus(200);
});

//var projectRoute = require('./'+project+'/serverCode.js');

//console.log(__dirname+'/'+project+'/serverCode.js');

//app.use('/*', projectRoute);

//app.get('/*', function (req, res) {
//  res.redirect('/');
//});
	
app.listen(5000, function(){
  console.log(project + " listening on port 5000");
})
