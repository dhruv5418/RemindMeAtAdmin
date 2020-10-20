
var admin = require('firebase-admin');
//Load HTTP module
const http = require("http");
const express = require('express')

const hostname = '127.0.0.1';
const port = 3000;
const router =express.Router()
//Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
const app = express()
app.use(express.json())
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://remindmeat-dadc3.firebaseio.com'
  });


  app.get('/', function (req, res) {
    res.send('hello world')
 
  })
  

app.get('/delete/:id', function(req, res){
    const uid=req.params.id
    admin.auth().deleteUser(uid)
    .then(function() {
      console.log('Successfully deleted user');
      res.send("hello");
    })
    .catch(function(error) {
      console.log('Error deleting user:', error);
      console.log('UID='+uid);
    });
})

app.listen(port,()=>{
    console.log('server is up');
})

//$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\Mon2\Downloads\remindmeat-dadc3-firebase-adminsdk-ym8fx-3b6423db47.json" 

// node index.js

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });