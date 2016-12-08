var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;
 connectionUrl = "mongodb://127.0.0.1:27017/fortuna";

mongoClient.connect(connectionUrl, function(err, db){
    //Verificar que si conecto
    if(err){
        console.log("No se conecto la base de datos");
        throw err;
    }else{
        var frases = db.collection('frases');
        //enviio de mensaje nuevo
        var mensaje = "";
        for( var i = 2; i<process.argv.length; i++){
            mensaje += (process.argv[i] + " ");
        }
        console.log("Este es el mensaje " + mensaje);
        frases.insert({
            "mensaje":mensaje
        }, function(err, res){
            if(err){
               console.log('No se pudo insertar') ;
               db.close();
                throw err;
            }
                console.log(`Resultado de insertar: ${res}`)
                db.close();
            
        });
    }
    
});