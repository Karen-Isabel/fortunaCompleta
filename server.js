//Cargando configuraciones
var http = require('http');
var config = require('./config/config.js');
var PORT = config.PORT;
var IP = config.IP;
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var staticServer = require('./internals/static-server.js');
var handlers = require('./internals/handlers.js');
var fortune = require('./internals/fortune.js');
//variables para express
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//uso de express
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("static"));
//variables para mongo
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var connectionUrl = 'mongodb://karenareli:karen12345@ds117348.mlab.com:17348/fortuneapps';
//extraer formulario con body-parser
app.use(bodyParser());

//mandar llamar static
app.use(express.static("static"));

//puerto que utilizaremos
app.set('port', process.env.PORT || 3001);
 

 //mandar llamar index
app.get('/', function(req, res){
 
  res.render('index');
			  
  res.send(html);
});

//mandar llamar handler
 app.get('/getacookie', function(req, res){
    var urlPath = req.url;
    handlers[urlPath](req, res);
    
});


//conectar con la base de datos
app.post('/', function(req, res){
    
var amigo = req.body.amigo;

mongoClient.connect(connectionUrl, function (err, db){
    //verificando que si conecto
    if(err){
        console.log(">no se conecto.....");
        throw err;
    }
    
    //si llega aqui es que no hubo problema de conexion.
    var papers = db.collection('frases');
    
    //insertando frases a coleccion
    papers.insert({
        "mensaje" : amigo
    }, function (err, res){
        if(err){
            console.log(">no se pudo insertar.......");
            db.close();
            throw err;
        }
        //es la verificacion de que se agreo el amigo
        console.log(`> Resultado de insertar: ${res}`);
        db.close();
    });
});
  var html = 'Tu nuevo amigo es: ' + amigo + '.<br>' +
			 '<a href="/">Probar de nuevo.</a>';
  res.send(html);
});
 
app.listen(app.get('port'), function(){
  console.log( 'Express se ha iniciado en http://localhost:' +
    app.get('port') + '; ' );
});