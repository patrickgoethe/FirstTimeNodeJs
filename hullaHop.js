var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || '4444');

var server = app.listen(app.get('port'), function(){
	console.log('server is running at ' + server.address().port);
});