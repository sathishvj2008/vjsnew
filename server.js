var express = require('express');
var app = express();
var path = require('path');

app.use('/js',express.static('js'));

app.use('/images',express.static('images'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
})


var port = process.env.PORT || 3000;
console.log("Listening on " + port);

app.listen(port);