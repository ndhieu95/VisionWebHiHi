var express = require('express');
var app = express();
var fs = require("fs");
var multer = require('multer');

//console.log(multer);

var upload = multer({ dest: '/tmp/'});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

// File input field name is simply 'file'
app.post('/file_upload', upload.single('file'), function(req, res) {
 var file = __dirname + '/' + req.file.filename;
 fs.rename(req.file.path, file, function(err) {
  if (err) {
   console.log(err);
   res.send(500);
} else {
   res.json({
    message: 'File uploaded successfully',
    filename: req.file.filename
 });
}
});
});

// display result images
app.get('/result', function(req, res) {
   var array = fs.readFileSync(req.query.filename).toString().split("\n");
   var imageLists = '<ul>';
   for (var i=0; i<array.length; i++) {
      imageLists += '<li><img src="' + array[i] + '"></li>';
   }
   imageLists += '</ul>';
   res.writeHead(200, {'Content-type':'text/html'});
   res.end(imageLists);

}
)  


app.use(express.static(__dirname + '/public'));

var server = app.listen(8081, function () {
 var host = server.address().address
 var port = server.address().port

 console.log("Example app listening at http://%s:%s", host, port)
})