var express = require('express');
var app = express();
var fs = require('fs');
const MongoClient = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
const dbName = 'plan_category';
//var db = mongo('node');

app.set('view engine','ejs');
app.set('views', './views');
app.use(express.static('public'));//js, css같은 static파일들
app.listen(3000,()=>{
    console.log('listening port 3000');
});


app.get('/', function(req, res){
    console.log('????');
    //res.render('view',{data:'lee'});
    res.render('month_plan');
});

app.get('/month-check',function(req, res){
    res.render('month_check');
});
