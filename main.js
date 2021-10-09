var express = require('express');
var app = express();
var http = require('http').createServer(app);
app.get('/', function(req, res){
    res.sendFile(__dirname+'/month_plan.html');
});

http.listen(8000,function(){
    console.log('연결');
})