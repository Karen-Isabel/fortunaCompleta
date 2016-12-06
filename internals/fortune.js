var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

module.exports = {
    "getFortune": function (cb) {
        //Logica que obtiene un mensaje aleatorio
        mongoClient.connect("mongodb://127.0.0.1:27017/fortuna",
        function(err, db){
            var frases = db.collection("frases");

            var consulta = frases.find({});

            consulta.toArray(function(err, data){

                var selector = Math.round(Math.random(0)* data.length);
                console.log("El numero de tu fortuna es: " + selector);
                // Armando Objeto Respuesta
                // Convertir en cadena escrita el Objeto Json
                var fortunePaperObj = JSON.stringify(data[selector]);
                // Cerrar mongo
                db.close();
                //Ejecutp el callback pasandole el parametro fortunePaper
                console.log("la fortuna es: " + fortunePaperObj);
                cb(fortunePaperObj);
            });
        });
    }
};