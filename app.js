var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;
// var connectionUrl = "mongodb://RicardoHdez:Ricky38476539@ds119578.mlab.com:19578/fortuneapps";
 connectionUrl = "mongodb://127.0.0.1:27017/fortuneapp";

mongoClient.connect(connectionUrl, function(err, db){
    //Verificar que si conecto
    if(err){
        console.log("No se conecto la base de datos");
        throw err;
    }else{
        var papers = db.collection('papers');
        //ARMANDO EL DOCUMENTO
        var mensaje = "";
        for( var i = 2; i<process.argv.length; i++){
            mensaje += (process.argv[i] + " ");
        }
        console.log("Este es el mensaje " + mensaje);
        papers.insert({
            "message":mensaje
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