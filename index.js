// Create an app
var server = require('diet')
var wss = require("./websockets-server");
var app = server()
app.listen('http://localhost:8000')

// Require the diet-static module and configure it
var static = require('diet-static')({
  path: app.path + '/app/'
})

// Attach the static module as a footer middleware
//app.footer(static)
app.view('file', static)
//error.page
app.missing(function($){
  $.redirect('/error.html')
})

//Error Handler
app.error(function($) {
  // Throw error message
 

  // Display Error Message to the client:
  $.end($.statusCode + '\n' + $.statusMessage + '\n' + $.fail.error.message)
})

// Index page
app.get('/', function($) {
  $.redirect('index.html')
})